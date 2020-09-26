const express= require('express')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
        require: true,
        trim: true
    },
    lastname: {
        type:String,
        require: true,
        trim: true
    },
    dob: {
        type:String,
        require: true,
        trim:true
    },
    email: {
        type:String,
        require: true,
        trim:true
    },
    password: {
        type:String,
        require: true
    },
    screenname: {
        type:String,
        require: true,
        trim: true
    }
})

module.exports = mongoose.model('user', userSchema)