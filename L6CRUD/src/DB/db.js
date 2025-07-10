const mongoose = require('mongoose');
require('dotenv').config();
function connectToDB(){
    mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
        console.log('DB CONNECTED');
    })
}
module.exports = connectToDB;