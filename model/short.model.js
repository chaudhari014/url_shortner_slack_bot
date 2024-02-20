const mongoose=require("mongoose")

const urlSchema = mongoose.Schema({
  originalUrl:{
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  expiration: {
    type: Date,
    default: () => new Date(+new Date() + 5 * 365 * 24 * 60 * 60 * 1000), 
  },
});

const urlModel=mongoose.model("url",urlSchema)

module.exports={urlModel}