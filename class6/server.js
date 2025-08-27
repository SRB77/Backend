require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;
const connectToDB = require('./src/DB/db');
connectToDB();

const app = express();

app.get('/',(req,res)=> res.send(`Chalo suru hua projec`));


















































app.listen(PORT , ()=> console.log(`Server is running on ${PORT}`));