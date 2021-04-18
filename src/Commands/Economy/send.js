const Command = require('../../Structures/Command');
const mongoose = require('mongoose');
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const Money = require('../../Structures/models/currency') 
const Profile = require('../../Structures/models/profile')
module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['sends', 'share'],
            description: 'Share some money to the mention profile',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            usage: "<mention user> <amount>",
            cooldowns: "20 seconds",
            cd: 20,
        });
    }

    async run(message, args) {
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        const money = await Money.findOne({
            userID: message.author.id
        })
        if(profile){
            const member = message.mentions.members.first();
            if(!member) return message.channel.send("You didn't mention anyone.");
            const receiverx = await Profile.findOne({
                userID: member.id
            })
            const moneyx = await Money.findOne({
                userID: member.id
            })
            if(receiverx){
                if(money.sstone > Number(args[1] - 1 || 0)){
                    message.channel.send(`**${args[1] || "1"}** spirit stone has been succefully added into ${member.user.username} account.`)
                    money.sstone -= Number(args[1] || 1);
                    money.save();
                    moneyx.sstone += Number(args[1] || 1);
                    moneyx.save();
                } else {
                    message.channel.send(`You don't have that much money.`)
                }
            } else {
                message.channel.send("The person you wanna give money to has no profile yet.")
            }
        } else {
            message.channel.send('You don\'t have a profile yet. Do `tc!create`')
        }
    }
};
