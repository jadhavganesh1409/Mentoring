const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');


// Bring model
const Admin = require('../../models/Admin');

// @route   POST api/admins
// @desc    Register Admin
// @access  Public
router.post('/',[
    check('email','Please include valid email').isEmail(),
    check('first_name','First Name Year is required').not().isEmpty(),
    check('middle_name','Middle Name Year is required').not().isEmpty(),
    check('last_name','Last Name Year is required').not().isEmpty(),
    check('mobile','Mobile Number is required').not().isEmpty(),
    check('des_id','DES ID is required').not().isEmpty()
],async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, first_name, middle_name, last_name,mobile ,des_id,password } = req.body;

    try {
        // See if mentee exists
        let admin= await Admin.findOne({ email });

        if(admin){
            return res.status(400).json({ errors : [{ msg: 'Admin Already exists'}]});
        }

        admin = new Admin({
            email,first_name, middle_name, last_name, mobile, des_id, password
        })
        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(password, salt);
        await admin.save();
        
        // retun jsonwebtoken
        const payload= {
            admin: {
                id : admin.id
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
        //res.send('Admin Registered');
    } catch (err) {
       console.error(err.message); 
       res.status(500).send('Server Error');
    }
    
});



module.exports = router;