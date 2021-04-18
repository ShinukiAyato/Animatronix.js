const Command = require('../../Structures/Command');
const price = require('../../Structures/models/items.json')
const mongoose = require('mongoose');
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const Money = require('../../Structures/models/currency') 
const Profile = require('../../Structures/models/profile') 
const Inventory = require('../../Structures/models/inventory')
module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['buys'],
            description: 'buy in the shop',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            usage: "<id>",
            cooldowns: "20 seconds",
            cd: 20
        });
    }

    async run(message, args) {
        const balance = await Money.findOne({
            userID: message.author.id
        })
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        const inventory = await Inventory.findOne({
            userID: message.author.id
        })
        if(profile){
            const buy = balance.sstone
            var wbuy = await price.price[args[0]]
            if(wbuy){
                if(buy >= wbuy){
                    message.channel.send(`**${price.name[args[0]]}** has successfully purchased.`)
                    profile.inventory += 1;
                    profile.save();
                    inventory[args[0]] += 1;
                    inventory.save();
                    balance.sstone -= Number(wbuy);
                    balance.save();
                } else {
                    message.channel.send('You don\'t have enough spirit stones to purchase that item.')
                }
            } else {
                message.channel.send(`That item doesn't exist in the shop`)
            }
        } else {
            message.channel.send('You don\'t have a profile yet. Do `tc!create`')
        }
    }
};
