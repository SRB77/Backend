const express = require("express");
const authRoutes = require('./routes/auth.routes');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json())
app.use(cookieParser()); //> This is used for storing the token into the cookies  

app.use('/auth' , authRoutes)
module.exports = app;
