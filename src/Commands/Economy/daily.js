const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const color = require('../../../color.json')
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
            description: 'You will get daily Spirit Stones',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            cooldowns: "1 day",
            cd: 86400,
        });
    }

    async run(message) {
        const balance = await Money.findOne({
            userID: message.author.id
        })
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        if(profile){
            const xcol = color[Math.floor(Math.random() * color.length)]
            const xmon = Math.floor(Math.random() * 500) + 3000
            const embed = new MessageEmbed()
            .setTitle(`Here is your daily spirit stones, **${message.author.username}**`)
            .setDescription(`You have been given **${xmon} spirit stones.**\n\nYou can get Vote Box by voting by on \`tc!vote\``)
            .setColor(xcol)
            message.channel.send(embed)
            balance.sstone += Number(xmon);
            balance.save();
        } else {
            message.channel.send('You don\'t have a profile yet. Do `tc!create`')
        }
    }
};
