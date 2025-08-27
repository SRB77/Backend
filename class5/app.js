const express = require('express');
const connectToDB = require('./src/DB/db');
connectToDB(); //this function will connect to the Database . 


const PORT = 3001
const app = express();


app.use(express.json())

app.get('/',(req,res)=> res.send(`You are on ROOT route`));

app.post('/notes',(req,res)=>{
    const {title ,desc} = req.body;
    // console.log(title,desc);
    res.send('Something happened');
})

app.listen(PORT , ()=> console.log(`Server is running on ${PORT}`))