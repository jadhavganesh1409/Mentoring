const express = require('express');
const router = express.Router();
const mentorauth = require('../../middleware/mentorauth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');


// @route   GET api/mentorauth
// @desc    Test Route
// @access  Public
router.get('/', mentorauth, async (req,res) => {
    try {
        const mentor = await Mentor.findById(req.mentor.id).select('-password');
        if(!mentor.new_mentor){
            res.json(mentor.new_mentee);
        }
        else{
            res.json(mentor);
        }
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route   GET api/mentor
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
        let mentor = await Mentor.findOne({ email });

        if(!mentor){
            return res.status(400).json({ errors : [{ msg: 'Invalid Credentials'}]});
        }

        const isMatch = await bcrypt.compare(password,mentor.password);
        
        if(!isMatch){
            return res.status(400).json({ errors : [{ msg: 'Invalid Credentials'}]});
        }


        // return jsonwebtoken
        const payload= {
            mentor: {
                id : mentor.id
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