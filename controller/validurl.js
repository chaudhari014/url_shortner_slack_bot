function isUrlValid(str) {
 try {
   const newUrl = new URL(str);
   return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
 } catch (err) {
   return false;
 }
}


module.exports={isUrlValid}