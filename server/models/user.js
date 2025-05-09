const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    schoolId:{
        type:String,
        required:true,
        unique:true
    },
    roleId:{
        type:String,
        required:true
    },
    isTeacher:{
        type:Boolean,
        default:false,
        required:true
    },
    isStudent:{
        type:Boolean,
        default:false,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
        required:true
    },
    
})

const User=mongoose.model('User',userSchema);

module.exports=User;