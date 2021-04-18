const mongoose = require('mongoose');

const moneySchema = mongoose.Schema({
    userID: String,
    sstone: Number,
})

module.exports = mongoose.model("Money", moneySchema);