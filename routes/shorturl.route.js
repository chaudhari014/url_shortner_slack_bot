const express=require("express")
const { convertToOrignal } = require("../controller/short.controller")

const short_URL=express.Router()


short_URL.get("/:shortUrl",convertToOrignal)

module.exports={short_URL}