const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');


// Bring model
const Mentor= require('../../models/Mentor');

// @route   POST api/mentors
// @desc    Register Mentor
// @access  Public
router.post('/',[
    check('email','Please include valid email').isEmail(),
    check('current_academic_year','Current Academic Year is required').not().isEmpty(),
    check('degree','Degree is required').not().isEmpty(),
    check('faculty','Faculty is required').not().isEmpty(),
    check('department','Department is required').not().isEmpty(),
    check('first_name','First Name Year is required').not().isEmpty(),
    check('middle_name','Middle Name Year is required').not().isEmpty(),
    check('last_name','Last Name Year is required').not().isEmpty(),
    check('mobile','Mobile Number is required').not().isEmpty(),
    check('group','Group is required').not().isEmpty(),
    check('des_id','DES ID is required').not().isEmpty()
],async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, current_academic_year, degree, faculty, department, first_name, middle_name, last_name, mobile, whatsapp, group, des_id, password } = req.body;

    try {
        // See if mentee exists
        let mentor = await Mentor.findOne({ email });

        if(mentor){
            return res.status(400).json({ errors : [{ msg: 'Mentor Already exists'}]});
        }

        mentor = new Mentor({
            email, current_academic_year, degree, faculty, department, first_name, middle_name, last_name, mobile, whatsapp, group, des_id, password
        })
        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        mentor.password = await bcrypt.hash(password, salt);
        await mentor.save();
        
        // retun jsonwebtoken
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
        //res.send('Mentor Registered');
    } catch (err) {
       console.error(err.message); 
       res.status(500).send('Server Error');
    }
    
});

module.exports = router;