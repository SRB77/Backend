const express = require('express');
PORT = 3000;
const app = express();

app.get('/',(req,res)=>{
    res.send(`The root Router`);
})

app.get('/home',(req,res)=>{
    res.send(`Welcome to homepage of Class3`);
})


app.listen(PORT ,()=>{
    console.log(`Class 3 Server is running on ${PORT}`);
})