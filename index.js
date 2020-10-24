const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
const path = require('path')
const MainRouter = require('./routes/mainroute')
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use('/', MainRouter)

//MongoDB
const Mongourl = 'mongodb://localhost:27017/junkie'
const MongoOnline = 'mongodb+srv://dbblog:dbblog@cluster0.a0orf.mongodb.net/junkie?retryWrites=true&w=majority'
mongoose.connect(MongoOnline || Mongourl,{useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
//mongoose.connect(MongoOnline,{useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
    if(!err) {
        console.log('Connected to Polical Junkie Database')
    }
    else {
        console.log('Connection attempt failed')
    }
})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client', 'build','index.html'))
    }).then(()=>{
        console.error();
    })
}

//app.listen(PORT,()=>console.log(`Server Running on port ${PORT}`));
app.listen(PORT, (err)=>{
    if(!err) {
        console.log(`Server Running on port ${PORT}`);
    }
    else {
        console.log(`Unable to connect.  Reason: ${err}`)
    }
})