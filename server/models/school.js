const express=require('express');
const mongoose=require('mongoose');

const schoolSchema=new mongoose.Schema({
    schoolName:{
        type:String,
        required:true,
        unique:true
    },
    schoolId:{
        type:String,
        required:true,
    },
})
const School=mongoose.model('School',schoolSchema);

module.exports=School;
