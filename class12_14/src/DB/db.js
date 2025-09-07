const mongoose = require('mongoose');
const URI = process.env.MONGODB_URL;
async function connectToDb(){
    try {
        await mongoose.connect(URI);
        console.log(`DB CONNECTED`);
    } catch (error) {
        console.log(error);
    }
    
}
module.exports = connectToDb