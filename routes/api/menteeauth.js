const express = require('express');
const router = express.Router();
const menteeauth = require('../../middleware/menteeauth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');


// @route   GET api/auth
// @desc    Test Route
// @access  Public
router.get('/', menteeauth, async (req,res) => {
    try {
        const mentee = await Mentee.findById(req.mentee.id).select('-password');
        if(!mentee.new_mentee){
            res.json(mentee.new_mentee);
        }
        else{
            res.json(mentee);
        }
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route   GET api/mentees
// @desc    Authenticate Mentee & get token
// @access  Public
router.post('/',[
    check('email','Please include valid email').isEmail(),
    check('password','Password is required').exists()
],async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // See if mentee exists
        let mentee = await Mentee.findOne({ email });

        if(!mentee){
            return res.status(400).json({ errors : [{ msg: 'Invalid Credentials'}]});
        }

        const isMatch = await bcrypt.compare(password,mentee.password);
        
        if(!isMatch){
            return res.status(400).json({ errors : [{ msg: 'Invalid Credentials'}]});
        }


        // return jsonwebtoken
        const payload= {
            mentee: {
                id : mentee.id
            }
        }

        jwt.sign(payload, 
            config.get('jwtSecret'),
            { expiresIn : 36000},
            (err, token) =>{
                if(err) throw err;
                res.json({ token });                     
            }
        );
      
    } catch (err) {
       console.error(err.message); 
       res.status(500).send('Server Error');
    }
    
});
module.exports = router;