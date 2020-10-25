const express= require('express')
const mongoose = require('mongoose')

const groupAssociations = new mongoose.Schema({
    profile_id: {
        //this is the user's _id from the users collection 
        type:String,
        require: true,
        trim: true
    },
    groupid: {
        //this is the _id value from groupschema
        type:String,
        require: true,
        trim: true
    },
    name: {
        //this is the description of the group from groupschemas
        type:String,
        require: true,
        trim: true
    }
})

module.exports = mongoose.model('groupassociations', groupAssociations)