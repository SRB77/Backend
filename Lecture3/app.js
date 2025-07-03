const express = require('express');
const app = express();
app.use(express.json());
let notes = []

app.get('/',(req,res)=>{
    res.send(`Welcome to the Home page`);   
})

app.post('/notes',(req,res)=>{
    notes.push(req.body);
    res.json({
        message:"notes saved successfully",
        notes:notes
    })
})

app.listen(3001,()=>{
    console.log(`Server is running on 3001`);
})