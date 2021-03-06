const express = require('express');
const router = express.Router();
const adminauth = require('../../middleware/adminauth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');


// @route   GET api/auth
// @desc    Test Route
// @access  Public
router.get('/', adminauth, async (req,res) => {
    try {
        const admin = await Admin.findById(req.admin.id).select('-password');
        if(!admin.new_admin){
            res.json(admin.new_admin);
        }
        else{
            res.json(admin);
        }
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route   GET api/mentees
// @desc    Authenticate Admin& get token
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
        let admin = await Admin.findOne({ email });

        if(!admin){
            return res.status(400).json({ errors : [{ msg: 'Invalid Credentials'}]});
        }

        const isMatch = await bcrypt.compare(password,admin.password);
        
        if(!isMatch){
            return res.status(400).json({ errors : [{ msg: 'Invalid Credentials'}]});
        }


        // return jsonwebtoken
        const payload= {
            admin: {
                id :admin.id
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