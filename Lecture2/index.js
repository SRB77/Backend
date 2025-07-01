/*const http = require('http');
const myserver = http.createServer((req,res)=>{
    res.end(`Hello World`);
})*/
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.end('Welcome to Home page');
})
app.get('/about',(req,res)=>{
    res.end('welcome to About page')
})
app.get('/profile',(req,res)=>{
    res.end(`Don't change anything in  profile`);
})
app.listen(3000,()=>console.log('server is running '))