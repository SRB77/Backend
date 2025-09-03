const express = require('express');
const multer = require('multer');
const router = express.Router();
const uploadFileToImagekit = require("../service/storage.service");



const upload = multer({storage:multer.memoryStorage()});



router.post('/songs',upload.single("audio"),async (req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const audioFile = await uploadFileToImagekit(req.file);
    console.log(audioFile);
    res.status(201).json({
        message : 'Uploaded Succefully',
        song :req.body  
    })
})
module.exports = router;