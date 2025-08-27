const mongoose = require('mongoose');

async function connectToDB(){
        await mongoose.connect("mongodb+srv://chandanCohort:dIHzCxsgxhFK80Pg@cohort.ujea7jb.mongodb.net/cohort");
        console.log('Connected TO DB 🥳')
}

module.exports = connectToDB;