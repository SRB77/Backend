const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to Backend")
})
app.get('/about' , (req,res)=>{
    res.send('hey we are on **ABOUT** page');
})

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
})