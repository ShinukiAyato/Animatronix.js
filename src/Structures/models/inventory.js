const mongoose = require('mongoose');

const inventorySchema = mongoose.Schema({
    userID: String,
    low: Number,
    middle: Number,
    high: Number,
    superior: Number,
    transcendent: Number,
    violet: Number,
    void: Number,
    vast: Number,
    rested: Number,
    whole: Number,
    cauldron: Number,
    rideable: Number,
    brush: Number,
    treasure: Number,
    seal: Number,
    spirit: Number,
    talisman: Number,
    demonic: Number,
    pickaxe: Number,
    box: Number,
    raid: Number,
    event: Number 
})

module.exports = mongoose.model("Inventory", inventorySchema);