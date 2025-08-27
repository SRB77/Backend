const mongoose = require('mongoose');

async function connectToDB(){
        await mongoose.connect("URI from the compass");
        console.log('Connected TO DB 🥳')
}

module.exports = connectToDB;