const express = require('express');
const mongoose = require('mongoose');
const noteModel = require('./src/models/notes.model')
const connectToDB = require('./src/DB/db');
const PORT = process.env.PORT
require('dotenv').config();

const app = express();

app.use(express.json()); //> Middleware 

connectToDB();
app.get('/',(req,res)=>{
    res.send('Welcome to the Note application .');
});

app.post('/create', async(req,res)=>{
    const {title ,content} = req.body;
    console.log(`Title is : ${title} and Content is :  ${content}`);
    await noteModel.create({title,content})
    res.json({
        message:"Note created successfully "
    })
})

app.get('/getallnotes',async(req,res)=>{
    const notes = await noteModel.find()  //> Find method just Get all the data in the database .
    res.json({
        message: "Notes fetched Succesfully!",
        notes:notes 
    });
})

app.delete('/delnote/:id' , async(req,res)=>{
    let noteId = req.params.id;
    await noteModel.findOneAndDelete({
        _id:noteId
    })
    res.json({
        message:"Note deleted Succefully",
        noteId
    });

})

app.patch('/updatenote/:id',async(req,res)=>{
    const noteId = req.params.id 
    const {title,content}  = req.body 
    console.log(title , content);

    await noteModel.findOneAndUpdate({
        _id:noteId
    },{
        title:title,
        content:content
    })

    res.json({
        message:"Updated the Note Successfully",
        noteId
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})