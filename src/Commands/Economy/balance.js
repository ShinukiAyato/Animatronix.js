const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
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
            aliases: ['bal', 'balances'],
            description: 'Show your balance',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            usage: "[mention]"
        });
    }

    async run(message) {
        const member = message.mentions.members.first() || message.member;
        const xid = member.id
        const balance = await Money.findOne({
            userID: xid
        })
        const profile = await Profile.findOne({
            userID: xid
        })
        if(member.user.username !== message.author.username){
            if(!profile) return message.channel.send('They didn\'t create a profile yet.')
            if(profile){
                const embed = new MessageEmbed()
                .setColor('#00FFFF')
                .setAuthor(`${member.user.username}'s Balance`, member.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .addField('<:spiritstone_shinuki:742333313066205215>**Spirit Stones:**', `${balance.sstone}`)
                message.channel.send(embed)
            }
        } else {
            if(!profile) return message.channel.send('You still didn\'t create a profile yet. Please use `tc!create`')
            if(profile){
                const embed = new MessageEmbed()
                .setColor('#00FFFF')
                .setAuthor(`${member.user.username}'s Balance`, member.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .addField('<:spiritstone_shinuki:742333313066205215>**Spirit Stones:**', `${balance.sstone}`)
                message.channel.send(embed)
            }
        }
    }
};
