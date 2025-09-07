require('dotenv').config();
const app = require('./src/app');
const connectToDb = require('./src/DB/db')
connectToDb(); //This will connect to Database . 
app.listen(3009,()=> console.log(`App is running on PORT - 3009`));