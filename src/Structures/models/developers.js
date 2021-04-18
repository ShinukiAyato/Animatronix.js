const mongoose = require('mongoose');

const devsSchema = mongoose.Schema({
    userID: String,
})

module.exports = mongoose.model("Devs", devsSchema);