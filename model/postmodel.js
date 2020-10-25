const express= require('express')
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true,
        trim:true
    },
    poster_profile_id: {
        type: String,
        required: true,
        trim:true
    },
    poster_screen_name: {
        type: String,
        required: true,
        trim:true
    },
    posted_date: {
        type: String,
        required: true,
        trim:true
    },
    postgroupid: {
        //this is the _id value from groupSchema.  This is how this specific post knows which post in a group it belongs too
        type: String,
        require: true,
        trim: true
    }
})

module.exports = mongoose.model('blog', postSchema)