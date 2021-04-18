const mongoose = require('mongoose');

const sectSchema = mongoose.Schema({
    SectName: String,
    OwnerID: String,
    NoMembers: Number,
    Visibility: String,
    MembersID: Array,
    raids: Number
})

module.exports = mongoose.model("Sect", sectSchema);