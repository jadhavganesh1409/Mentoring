const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique:true
    },

    current_academic_year:{
        type: String,
        required: true
    },

    faculty:{
        type: String,
        required: true
    },

    department:{
        type: String,
        required: true
    },

    degree:{
        type: String,
        required: true
    },

    first_name:{
        type: String,
        required: true
    },

    middle_name:{
        type: String,
        required: true
    },

    last_name:{
        type: String,
        required: true
    },

    mobile:{
        type: String,
        required: true
    },

    whatsapp:{
        type: String
    },
    
    group:{
        type: String,
        required: true
    },

    des_id:{
        type: String
    },

    password:{
        type: String,
        default: "Mentor@123"
    },

    new_mentor:{
        type:Boolean,
        default:true
    },

    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Mentor = mongoose.model('mentors',MentorSchema);