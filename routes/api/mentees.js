const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');


// Bring model
const Mentee = require('../../models/Mentee');

// @route   POST api/mentees
// @desc    Register Mentee
// @access  Public
router.post('/',[
    check('email','Please include valid email').isEmail(),
    check('current_academic_year','Current Academic Year is required').not().isEmpty(),
    check('degree','Degree is required').not().isEmpty(),
    check('faculty','Faculty is required').not().isEmpty(),
    check('studying_at','Studying Year is required').not().isEmpty(),
    check('first_name','First Name Year is required').not().isEmpty(),
    check('middle_name','Middle Name Year is required').not().isEmpty(),
    check('last_name','Last Name Year is required').not().isEmpty(),
    check('roll_no','Roll No Year is required').not().isEmpty(),
    check('mobile','Mobile Number is required').not().isEmpty(),
    check('division','Divison is required').not().isEmpty(),
    check('group','Group is required').not().isEmpty(),
    check('des_id','DES ID is required').not().isEmpty()
],async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, current_academic_year, degree, faculty, studying_at, first_name, middle_name, last_name,roll_no, mobile, whatsapp, division, group, des_id, password } = req.body;

    try {
        // See if mentee exists
        let mentee = await Mentee.findOne({ email });

        if(mentee){
            return res.status(400).json({ errors : [{ msg: 'Mentee Already exists'}]});
        }

        mentee = new Mentee({
            email, current_academic_year, degree, faculty, studying_at, first_name, middle_name, last_name,roll_no, mobile, whatsapp, division, group, des_id, password
        })
        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        mentee.password = await bcrypt.hash(password, salt);
        await mentee.save();
        
        // retun jsonwebtoken
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
        //res.send('Mentee Registered');
    } catch (err) {
       console.error(err.message); 
       res.status(500).send('Server Error');
    }
    
});



module.exports = router;