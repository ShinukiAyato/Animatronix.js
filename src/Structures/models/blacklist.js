const mongoose = require('mongoose');

const blacklistSchema = mongoose.Schema({
    userID: String,
})

module.exports = mongoose.model("Blacklist", blacklistSchema);