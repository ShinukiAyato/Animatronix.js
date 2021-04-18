const Command = require('../../Structures/Command');
const price = require('../../Structures/models/items.json')
const mongoose = require('mongoose');
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const Profile = require('../../Structures/models/profile') 
const Inventory = require('../../Structures/models/inventory')
module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Gift an item to the mentioned user.',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            usage: "<user> <item> [amount]",
            cooldowns: "20 seconds",
            cd: 20,
        });
    }

    async run(message, args) {
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        const inventory = await Inventory.findOne({
            userID: message.author.id
        })
        if(profile){
            const member = message.mentions.members.first();
            if(!member) return message.channel.send("You didn't mention anyone.");
            const receiverx = await Profile.findOne({
                userID: member.id
            })
            const inventoryx = await Inventory.findOne({
                userID: member.id
            })
            if(receiverx){
                if(price.sellable[args[1]]){
                    if(inventory[args[1]] > Number(args[2] - 1 || 0)){
                        message.channel.send(`${args[2] || "1"} **${price.name[args[1]]}** has been succefully added into ${member.user.username} account.`)
                        profile.inventory -= Number(args[2] || 1);
                        profile.save();
                        inventory[args[1]] -= Number(args[2] || 1);
                        inventory.save();
                        receiverx.inventory += Number(args[2] || 1);
                        receiverx.save();
                        inventoryx[args[1]] += Number(args[2] || 1);
                        inventoryx.save();
                    } else {
                        message.channel.send('You don\'t have that much item in your inventory.')
                    }
                } else if(!args[1]) {
                    message.channel.send(`You didn't said any item.`)
                } else {
                    message.channel.send("That item doesn't exist.")
                }
            } else {
                message.channel.send("The person you wanna give it to has no profile yet.")
            }
        } else {
            message.channel.send('You don\'t have a profile yet. Do `tc!create`')
        }
    }
};
