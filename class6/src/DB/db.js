const mongoose = require('mongoose');
const URI = process.env.MONGO_URI;

async function connectToDB(){
    await mongoose.connect(URI);
    console.log(`Connected to DB `);
}

module.exports = connectToDB;