const express=require("express")
const { convertToShort, convertToOrignal } = require("../controller/short.controller")

const short_URL=express.Router()

short_URL.post("/shorten",convertToShort)

short_URL.get("/:shortUrl",convertToOrignal)

module.exports={short_URL}