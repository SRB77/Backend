const e = require('express');
const express = require('express');
const indexRoutes = require('./routes/index.routes');


const app  = express();

app.use((req,res,next)=>{
    try {
      console.log(`This is a middleware between app and router`);
      next();
    } catch (error) {
        res.send(`Got some error at Next`)
    }
    
})
app.use('/',indexRoutes);



module.exports = app;