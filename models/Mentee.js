const mongoose = require('mongoose');

const MenteeSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique:true
    },

    current_academic_year:{
        type: String,
        required: true
    },

    degree:{
        type: String,
        required: true
    },

    faculty:{
        type: String,
        required: true
    },

    studying_at:{
        type:String,
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

    roll_no:{
        type: Number,
        required: true,
    },

    mobile:{
        type: String,
        required: true
    },

    whatsapp:{
        type: String
    },

    division:{
        type: String,
        required: true
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
        default: "Mentee@123"
    },

    date:{
        type: Date,
        default: Date.now
    },

    new_mentee:{
        type:Boolean,
        default:true
    }
});

module.exports = Mentee = mongoose.model('mentees',MenteeSchema);