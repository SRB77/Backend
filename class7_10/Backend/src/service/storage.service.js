
var ImageKit = require("imagekit");

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY ,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT ,
});

function uploadFileToImagekit(file){
    return new Promise((res,rej)=>{
        imagekit.upload({
            file:file.buffer,
            fileName:"bollywood_cohort"
        },(error,result)=>{
            if(error){
                rej(error);
            }else{
                res(result)
            }
        })
    })
}
module.exports = uploadFileToImagekit;