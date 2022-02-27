const mongoose = require('mongoose');

const AdminSchema= new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique:true
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

    des_id:{
        type: String
    },

    password:{
        type: String,
        default: "Admin@123"
    },

    date:{
        type: Date,
        default: Date.now
    },

    new_admin:{
        type:Boolean,
        default:true
    }
});

module.exports = Admin = mongoose.model('admins',AdminSchema);