const slackbot=require("./controller/slackBot")
const express=require("express")
const { connection } = require("./config/db")
const { short_URL } = require("./routes/shorturl.route")
require("dotenv").config()

const app=express()
app.use(express.json())

// home route
app.get("/",(req,res)=>{
  return  res.status(200).json({msg:"Welcome to Url Shortener"})
})

app.use("/",short_URL)

// route not found
app.use((req,res)=>{
   return res.status(404).json({msg:"end point not found"})
})

// catch internal server error
app.use((err,req,res)=>{
    console.log(err.message,"server error")
   return res.status(500).json({msg:"server error" })
})

port=process.env.PORT || 8060

// server start
app.listen(port,async()=>{
 try {
    await connection
    console.log("db connected")
 } catch (error) {
    console.log(error)
 }
 console.log("server running")
})