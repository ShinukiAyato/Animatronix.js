const Command = require('../../Structures/Command');
const color = require('../../../color.json');
const mongoose = require('mongoose');
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const Money = require('../../Structures/models/currency') 
const Profile = require('../../Structures/models/profile');
const { MessageEmbed } = require('discord.js');
module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['slot'],
            description: 'Betting your spirit stones in the game of slots.',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            usage: "<amount>",
            cooldowns: "10 seconds",
            cd: 10,
        });
    }

    async run(message, args) {
        const cxx = color[Math.floor(Math.random()*(color.length))]
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        const balance = await Money.findOne({
            userID: message.author.id
        })
        if(profile){
            const xarg = Math.floor(Number(args[0]))
            if(!xarg) return message.channel.send('You need to put something to bet!');
            if(isNaN(xarg)) return message.channel.send('Make sure that you put a decent number to bet!')
            if(xarg == 0) return message.channel.send('You can\'t bet 0. Please try again.')
            if(xarg >= 5501) return message.channel.send(`The max bet is only 5500!`);
            if(xarg > balance.sstone) return message.channel.send('You don\'t have that much spirit stone.');
            const signs = [
                {
                    symbol: "<a:HypeGangNeko:798596119889313832>",
                    name: "HypeGangNeko"
                },
                {
                    symbol: "<a:ChibiLazy:798596149597831209>",
                    name: "ChibiLazy"
                },
                {
                    symbol: "<a:VibingAnime:798596132720738334>",
                    name: "VibingAnime"
                }
            ]
            const sign1 = signs[Math.floor(Math.random() * signs.length)]
            const sign2 = signs[Math.floor(Math.random() * signs.length)]
            const sign3 = signs[Math.floor(Math.random() * signs.length)]
            const embed = new MessageEmbed()
            .setTitle('**𝐒𝐥𝐨𝐭𝐬 𝐑𝐞𝐬𝐮𝐥𝐭:**')
            .setColor(cxx)
            .addField(`You have betted ${args[0]} spirit stones!`, `| ${sign1.symbol} | ${sign2.symbol} | ${sign3.symbol} |`);
            message.channel.send(embed)
            if(sign1.name == sign2.name == sign3.name){
                message.channel.send('You Won Congrats!')
                balance.sstone += Number(args[0])
                balance.save()
            } else {
                message.channel.send('You Lost BetterLuck Nexttime!')
                balance.sstone -= Number(args[0])
                balance.save();
            }
            
        } else {
            message.channel.send('You don\'t have a profile yet. Do `tc!create`')
        }
    }
};
