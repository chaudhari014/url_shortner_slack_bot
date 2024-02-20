const { API } = require("../api")
const { generateRandomBase62String } = require("../middleware/generateBase62")
const { urlModel } = require("../model/short.model")

// for convert to shorturl 
const convertToShort = async (originalUrl) => {
   try {
      const checkUrl = await urlModel.findOne({ originalUrl: originalUrl });
      if (checkUrl) {
         return `${API}/${checkUrl.shortUrl}`;
      }
      const shortUrl = generateRandomBase62String(4);
      // store inside DB
      const urlData = new urlModel({ originalUrl, shortUrl });
      const saveData = await urlData.save();
      //console.log(saveData,"enter url")
      // console.log(saveData)
      return `${API}/${saveData.shortUrl}`;
   } catch (error) {
      return `${error.message}`;
   }
};


// for getting orignal url 
const convertToOrignal=async (req,res)=>{
    const {shortUrl}= req.params
 try {
    //console.log(shortUrl,"shortUrl")
    const result=await urlModel.findOne({shortUrl})
    // console.log(result)
    //console.log(result,"result")
    if(result){
         res.redirect(result.originalUrl);
    }else{
        return res.status(400).json({"msg":"wrong  url end point"})
    }
 } catch (error) {
    return res.status(400).json({"error":error.message})
 }

}

module.exports={convertToOrignal,convertToShort}