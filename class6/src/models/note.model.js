const mongoose = require('mongoose');
const {Schema} = mongoose;
const noteSchema = new Schema(
    {
        title : String,
        content : String
    }
)
const notes = mongoose.model('notes',noteSchema);   

module.exports = notes;