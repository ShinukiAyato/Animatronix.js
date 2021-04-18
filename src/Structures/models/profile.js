const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    userID: String,
    inventory: Number,
    class: String,
    rank: String,
    nrank: String,
    occupation: String,
    titles: [String],
    sect: String
})

module.exports = mongoose.model("Profile", profileSchema);