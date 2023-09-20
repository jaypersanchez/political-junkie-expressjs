const express = require('express')
const route = express.Router()
const User = require('../model/usermodel')
const Blog = require('../model/postmodel')
const Group = require('../model/groupmodel')
const GroupAssociation = require('../model/groupassociations')

route.get('/test', (req, res) => {
    try {
        // Your code that might throw an error goes here
        const simulateError = false; // Set to true to simulate an error
    
        if (simulateError) {
          // Simulate an error
          throw new Error('An error occurred');
        } else {
          // Successful response
          res.json('Test Successful');
        }
      } catch (err) {
        // Handle errors here
        res.status(500).json({ error: err.message });
      }
})

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

//add group to group associations.  this is a list of group(s) that a user belongs too
route.post('/joingroup', (req, res) => {
    let grpAssociation = new GroupAssociation(req.body)
    grpAssociation.save((err,docs)=>{
        if(err) {
            res.json(err)
        }
        else {
            res.json('Successfully Joined')
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

//get list of groups a user is a member of.  From groupassociations collections
route.get('/getassociatedgroups',(req,res)=>{
    let _profile_id = req.query.profile_id
    Group.find({profile_id:_profile_id}, (err, data)=>{
        if(err) {
            res.json(err)
        }
        else {
            res.json(data)
        }
    })
})

//get list of groups that are public and open for anyone to view and post comment
route.get('/getpublicgroups',(req,res)=>{
    Group.find({privacy:"public"}, (err, data)=>{
        if(err) {
            res.json(err)
        }
        else {
            res.json(data)
        }
    })
   
})

//search for groups by name
route.get('/searchgroups',(req,res)=>{
    let str = req.query.search
    Group.find({ name: {$regex: str, $options: "i"} },(err, data)=>{
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
            console.log(err)
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
            res.send({success:1,profile_id:found._id,screen_name:found.screenname})
        }
        else {
            res.send({success:0,profiel_id:"fail"})
        }
    })
    .catch(err=>res.send("User Not Found"))
})

module.exports = route