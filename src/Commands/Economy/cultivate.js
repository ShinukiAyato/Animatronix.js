const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js')
const mongoose = require('mongoose');
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const XP = require('../../Structures/models/xp') 
const Profile = require('../../Structures/models/profile') 
const realm = require('../../Structures/models/rank.json')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'earn xp when cultivate.',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            cooldowns: "10 minutes",
            cd: 600,
        });
    }

    async run(message) {
        const xp = await XP.findOne({
            userID: message.author.id
        })
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        if(profile){
            const pr = profile.nrank
            const xclass = profile.class
           const xpr = realm[xclass]
            if(profile.rank === "God") return message.channel.send("You are at your limit now you can do `tc!rebirth`")
            if(profile.rank === "Godly Buddha") return message.channel.send("You are at your limit now you can do `tc!rebirth`")
            if(xp.xp >= xpr[pr].xp) return message.channel.send('You are at your bottleneck. Do `tc!breakthrough`')
            const embed = new MessageEmbed()
            .setColor('#00FF00')
            .setFooter(`Don't forget to vote for the bot.`)
            .addField('Where would you like to cultivate?', '`Mountain` ,  `Sacred Cave` ,  `Blood Pool` ,  `Holy Tree` ,  `Mist Forest`');
            message.channel.send(embed)
            const cultivation = new MessageEmbed()
            .setColor('#00FF00')
            .setFooter(`Don't forget to vote for the bot.`)
            try {
                let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                let mxs = msgs.first().content.replace(' ', '').toLowerCase()
                const check = 'You cultivate successfully.'
                    if(mxs=='mountain'){
                        var xnum = Math.floor(Math.random() * 80) + 200
                        const xsen = [
                            'A group of bandits saw you and beaten you.',
                            'You where not prepared while cultivating.',
                            'A Wild Beast roaming around and interrupted you.',
                            'The gaurdian of the mountain has woken from their slumber and eat what your cultivating.'
                        ]
                        const wsen = xsen[Math.floor(Math.random() * xsen.length)]
                        var qsen = [wsen, check]
                        var fsen = qsen[Math.floor(Math.random() * qsen.length)]
                        if(fsen === wsen){
                            cultivation.addField(`${fsen}`, '**You Gained**: 0 xp cultivation')
                            message.channel.send(cultivation)
                        }
                        if(fsen === check){
                            cultivation.addField(`${check}`, `**You Gained**: ${xnum} xp cultivation`)
                            message.channel.send(cultivation)
                            xp.xp += xnum;
                            xp.save();
                        }
                    } else if(mxs=='sacredcave'){
                        var xnum = Math.floor(Math.random() * 80) + 150
                        const xsen = [
                            'A group of bandits saw you and beaten you.',
                            'You where not prepared while cultivating.',
                            'A Wild Beast roaming around and interrupted you.',
                            'The gaurdian of the Sacred Cave has woken from their slumber and eat what your cultivating.',
                            'The cave collapse and injured you.',
                            'The cave\'s mana was all used and you didn\'t get anything from your cultivation.'
                        ]
                        const wsen = xsen[Math.floor(Math.random() * xsen.length)]
                        var qsen = [wsen, check]
                        var fsen = qsen[Math.floor(Math.random() * qsen.length)]
                        if(fsen === wsen){
                            cultivation.addField(`${fsen}`, '**You Gained**: 0 xp cultivation')
                            message.channel.send(cultivation)
                        }
                        if(fsen === check){
                            cultivation.addField(`${check}`, `**You Gained**: ${xnum} xp cultivation`)
                            message.channel.send(cultivation)
                            xp.xp += xnum;
                            xp.save();
                        }
                    } else if(mxs=='bloodpool'){
                        var xnum = Math.floor(Math.random() * 60) + 100
                        const xsen = [
                            'A group of bandits saw you and beaten you.',
                            'You where not prepared while cultivating.',
                            'A Wild Beast roaming around and interrupted you.',
                            'The gaurdian of the Sacred Cave has woken from their slumber and eat what your cultivating.',
                            'The mana on the bloodpool is to strong that your cultivation was interrupted.',
                            'Someone was using the bloodpool and didn\'t cultivate for now.'
                        ]
                        const wsen = xsen[Math.floor(Math.random() * xsen.length)]
                        var qsen = [wsen, check]
                        var fsen = qsen[Math.floor(Math.random() * qsen.length)]
                        if(fsen === wsen){
                            cultivation.addField(`${fsen}`, '**You Gained**: 0 xp cultivation')
                            message.channel.send(cultivation)
                        }
                        if(fsen === check){
                            cultivation.addField(`${check}`, `**You Gained**: ${xnum} xp cultivation`)
                            message.channel.send(cultivation)
                            xp.xp += xnum;
                            xp.save();
                        }
                    } else if(mxs=='holytree'){
                        var xnum = Math.floor(Math.random() * 30) + 50
                        cultivation.addField(`This is the Holy Tree of course you will be successful.`, `**You Gained**: ${xnum} xp cultivation`)
                        message.channel.send(cultivation)
                        xp.xp += xnum;
                        xp.save();
                    } else if(mxs=='mistforest'){
                        var xnum = Math.floor(Math.random() * 50) + 70
                        const xsen = [
                            'A group of bandits saw you and beaten you.',
                            'You where not prepared while cultivating.',
                            'A Wild Beast roaming around and interrupted you.',
                            'Someone mixed a poison gas that made your stop cultivating and heal yourself.',
                            'Some group of shadow hunters bullied you and leave you empty handed.'
                        ]
                        const wsen = xsen[Math.floor(Math.random() * xsen.length)]
                        var qsen = [wsen, check]
                        var fsen = qsen[Math.floor(Math.random() * qsen.length)]
                        if(fsen === wsen){
                            cultivation.addField(`${fsen}`, '**You Gained**: 0 xp cultivation')
                            message.channel.send(cultivation)
                        }
                        if(fsen === check){
                            cultivation.addField(`${check}`, `**You Gained**: ${xnum} xp cultivation`)
                            message.channel.send(cultivation)
                            xp.xp += xnum;
                            xp.save();
                        }
                    } else {
                        message.channel.send('You didn\'t choose among the choices cancelling command.')
                    }
                }catch(e){
                    return message.channel.send(`You didn't choose in time cancelling command.`)
                }
        } else {
            message.channel.send('You don\'t have a profile yet. Do `tc!create`')
        }
    }
};