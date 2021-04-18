const mongoose = require('mongoose');

const xbetaSchema = mongoose.Schema({
    userID: String,
})

module.exports = mongoose.model("XBeta", xbetaSchema);