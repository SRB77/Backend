const mongoose = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URL);
    }catch(err){
        console.log(err);
    }
    console.log('DB connected');
}

module.exports = connectDB;