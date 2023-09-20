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

// connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/junkie");

mongoose.connection.on("connected", () => {
    //checks if the connection is established
  console.log("Mongo Connected!")

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})

mongoose.connection.on("error", err => {
  console.log(err)
}) 