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
            aliases: ['prof', 'profiles'],
            description: 'Show your/mentioned profile.',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            usage: "[mention]",
            cooldowns: "1 minute",
            cd: 60,
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
                .setAuthor(`${member.user.username}'s Profile`, member.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .addField('**𝐓𝐢𝐭𝐥𝐞𝐬**:', `${profile.titles}`)
                .addField('**𝐒𝐞𝐜𝐭**:', `${profile.sect}`)
                .addField('**𝐂𝐮𝐥𝐭𝐢𝐯𝐚𝐭𝐢𝐨𝐧 𝐑𝐞𝐚𝐥𝐦**:', `${profile.class}`)
                .addField('**𝐂𝐮𝐥𝐭𝐢𝐯𝐚𝐭𝐢𝐨𝐧 𝐑𝐚𝐧𝐤**:', [
                    `Current: ${profile.rank}`,
                    `Next Rank: ${profile.nrank}`
                ])
                .addField('**𝐈𝐧𝐯𝐞𝐧𝐭𝐨𝐫𝐲**:', `${profile.inventory}`)
                .addField('**𝐎𝐜𝐜𝐮𝐩𝐚𝐭𝐢𝐨𝐧**:', `${profile.occupation}`)
                .addField('**𝐒𝐩𝐢𝐫𝐢𝐭 𝐒𝐭𝐨𝐧𝐞**:', `${balance.sstone}`)
                message.channel.send(embed)
            }
        } else {
            if(!profile) return message.channel.send('You still didn\'t create a profile yet. Please use `tc!create`')
            if(profile){
                const embed = new MessageEmbed()
                .setColor('#00FFFF')
                .setAuthor(`${member.user.username}'s Profile`, member.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .addField('**𝐓𝐢𝐭𝐥𝐞𝐬**:', `${profile.titles}`)
                .addField('**𝐒𝐞𝐜𝐭**:', `${profile.sect}`)
                .addField('**𝐂𝐮𝐥𝐭𝐢𝐯𝐚𝐭𝐢𝐨𝐧 𝐑𝐞𝐚𝐥𝐦**:', `${profile.class}`)
                .addField('**𝐂𝐮𝐥𝐭𝐢𝐯𝐚𝐭𝐢𝐨𝐧 𝐑𝐚𝐧𝐤**:', [
                    `Current: ${profile.rank}`,
                    `Next Rank: ${profile.nrank}`
                ])
                .addField('**𝐈𝐧𝐯𝐞𝐧𝐭𝐨𝐫𝐲**:', `${profile.inventory}`)
                .addField('**𝐎𝐜𝐜𝐮𝐩𝐚𝐭𝐢𝐨𝐧**:', `${profile.occupation}`)
                .addField('**𝐒𝐩𝐢𝐫𝐢𝐭 𝐒𝐭𝐨𝐧𝐞**:', `${balance.sstone}`)
                message.channel.send(embed)
            }
        }
    }
};
/*
                cooldown.add(message.author.id)
                setTimeout(() => {
                    cooldown.delete(message.author.id)
                }, cdseconds * 1000)
*/
