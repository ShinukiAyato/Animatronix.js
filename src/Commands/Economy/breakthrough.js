const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const Inventory = require('../../Structures/models/inventory') 
const Profile = require('../../Structures/models/profile')
const XP = require('../../Structures/models/xp')
const realm = require('../../Structures/models/rank.json')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['rankup', 'bt', 'rankups', 'break'],
            description: 'Breakthrough your current rank.',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
        });
    }

    async run(message) {
        const xp = await XP.findOne({
            userID: message.author.id
        })
        const inventory = await Inventory.findOne({
            userID: message.author.id
        })
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        if(!profile) return message.channel.send('You still didn\'t create a profile yet. Please use `tc!create`')
        if(profile){
            const pr = profile.nrank
            const xclass = profile.class
            const xpr = realm[xclass]
            if(profile.rank === "God") return message.channel.send("You are at your limit now you can do `tc!rebirth`")
            if(profile.rank === "Godly Buddha") return message.channel.send("You are at your limit now you can do `tc!rebirth`")
            if(xp.xp < xpr[pr].xp){
                const current = Number(xpr[pr].xp) - Number(xp.xp)
                message.channel.send(`You still need ${current} xp to breakthrough.`)
            }
            if(xp.xp >= xpr[pr].xp){
                const xbreak = inventory[xpr[pr].item.name]
                const xname = xpr[pr].item.name
                var pure = xpr[pr].item[xname]
                const item = xpr[pr].item
                if(xbreak >= pure){
                    const xsen = "You have failed to breakthrough try again next time. The items was used up."
                    const csen = "You have successfully broken through to the next stage. The items was used up."
                    var qsen = [csen, xsen, csen]
                    var fsen = qsen[Math.floor(Math.random() * qsen.length)]
                    if(fsen === xsen){
                        message.channel.send(fsen)
                        inventory[xname] -= pure;
                        inventory.save();
                        profile.inventory -= pure;
                        profile.save();
                    }
                    if(fsen === csen){
                        message.channel.send(fsen)
                        inventory[xname] -= pure;
                        inventory.save();
                        profile.inventory -= pure;
                        profile.rank = item.rank;
                        profile.nrank = item.nrank;
                        profile.save();
                    }
                } else {
                    message.channel.send('You don\'t have the necessary items. If you want to see the items for each breakthrough type `tc!btlist`')
                }
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
