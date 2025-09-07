const express = require('express');
const multer = require('multer');
const router = express.Router();
const uploadFileToImagekit = require("../service/storage.service");
const songmodel = require('../models/song.model');

const upload = multer({storage:multer.memoryStorage()});


router.post('/songs',upload.single("audio"),async (req,res)=>{
    // console.log(req.body);
    // console.log(req.file);
    const audioFile = await uploadFileToImagekit(req.file);

    const song = await songmodel.create({
        title:req.body.title,
        artist:req.body.artist,
        audio:audioFile.url,
        mood:req.body.mood,
    })
    res.status(201).json({
        message : 'Uploaded Succefully',
        song :song
    })
})

router.get('/moodSongs' , async (req,res)=>{
    const mood = req.query.mood;
    const songs = await songmodel.find({
        mood:mood
    })
    res.status(200).json({
        message:`All the ${mood}songs fetched successfully`,
        songs:songs
    })
})
module.exports = router;