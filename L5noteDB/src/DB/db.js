const mongoose = require("mongoose");
require("dotenv").config();
//? Server kese DB se connect karna hai wo DB.js file mein rahega

function connectToDB() {
  mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Connected to DB");
  });
}

module.exports = connectToDB;
