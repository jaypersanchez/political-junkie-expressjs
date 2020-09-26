const express= require('express')
const mongoose = require('mongoose')

const postedcommentsSchema = new mongoose.Schema({
    postmodelid: {
        //this value is the _id from postSchema. This is how a reply to a comment is identified
        type: String,
        require: true,
        trim: true
    }
});

module.exports = mongoose.model('postcommentsSchema', postedcommentsSchema)