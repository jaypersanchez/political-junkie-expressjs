const express= require('express')
const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    owner: {
        //This is the _id from UserSchema
        type:String,
        require: true,
        trim: true
    },
    name: {
        type:String,
        require: true,
        trim: true
    },
    desc: {
        type:String,
        require: false,
        trim: true
    },
    privacy: {
        type:String,
        require: false
    },
    no_members: {
        type: Number,
        require: false
    }
})

module.exports = mongoose.model('groupSchema', groupSchema)