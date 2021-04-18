const mongoose = require('mongoose');

const workSchema = mongoose.Schema({
    userID: String,
    Occupation: String,
    fail: Number,
    success: Number,
    salary: Number
})

module.exports = mongoose.model("Work", workSchema);