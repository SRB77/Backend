const express = require('express');
const morgan = require('morgan');
const app = express();


app.use(morgan('dev'));

app.set('view engine' , 'ejs');

app.use((req,res,next)=>{
    console.log(`Middleware detected!`);
    next();
});

app.get('/',(req,res,next)=>{
    console.log(`this is a custom middleware and i am on home page`)
},(req,res)=>{
    res.render('index')
})
app.get('/about',express.json(),(req,res)=>{
    res.json({
        message:'i am now on about page',
        note: 'this is a in built middleare we use '
    });
})
app.get('/profile',morgan('dev'),(req,res)=>{ //? Here we are using 'thirdpary' middlware
    res.send(`i am on profile page`);
}) 
app.listen(3001,()=>{
    console.log(`Server is also running on 3001`);
})