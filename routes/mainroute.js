const express = require('express')
const route = express.Router()
const User = require('../model/usermodel')
const Blog = require('../model/postmodel')
const Group = require('../model/groupmodel')

//Adding new group
route.post('/createnewgroup', (req, res)=>{
    let group = new Group(req.body)
    group.save((err,docs)=>{
        if(err) {
            res.json(err)
        }
        else {
            res.json('New Group Added')
        }
    })
    
})

//Get post for specific group post based on groupmodel _id value
route.get('/mygrouppost', (req, res)=>{
    let _postgroupid = req.query.postgroupid
    Blog.find({postgroupid:_postgroupid}, (err, data)=>{
        if(err) {
            res.json(err)
        }
        else {
            res.json(data)
        }
    })
})

//get list of groups for a specific profile by using the User _id
route.get('/getgroups',(req,res)=>{
    let _owner = req.query.profile_id
    Group.find({owner:_owner}, (err, data)=>{
        if(err) {
            res.json(err)
        }
        else {
            res.json(data)
        }
    })
})

//Get Profile from user
route.get('/profile',(req,res)=>{
    let email = req.query.email
    //console.log(email)
    User.findOne({email:email})
    .then(found=>{
        //console.log("User exists");
        if(found.email==email) {
            res.send(found)
        }
        
    })
    .catch(err=>res.send("User Not Found"))
})

//Post retrieval
route.get('/posts', (req, res)=>{
   let _postgroupid = req.query.postgroupid
   Blog.find({postgroupid:_postgroupid},(err,data)=>{
       if(err) {
           res.json(err)
       }
       else {
           res.json(data)
       }
   })
})

//Adding Post
route.post('/addpost', (req, res)=>{
    let adding = new Blog(req.body)
    adding.save((err,docs)=>{
        if(err) {
            res.json('Try again')
        }
        else {
            res.json('Post Added')
        }
    })
})

//Register
route.post('/register', (req, res)=>{
    let register = new User(req.body)
    //process content of body
    register.save()
    .then((err,docs)=>{
        if(err) {
            res.send(err)
        }
        else {
            res.send('Successfully Register')
        }
    })
})

//Login
route.post('/login',(req,res)=>{
    User.findOne({email:req.body.email})
    .then(found=>{
        console.log("User exists");
        if(found.password==req.body.password) {
            res.send({success:1,profile_id:found._id})
        }
        else {
            res.send({success:0,profiel_id:"fail"})
        }
    })
    .catch(err=>res.send("User Not Found"))
})

module.exports = route