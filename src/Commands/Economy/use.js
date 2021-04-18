const Command = require('../../Structures/Command');
const price = require('../../Structures/models/items.json')
const mongoose = require('mongoose');
const { MessageEmbed } = require('discord.js')
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const XP = require('../../Structures/models/xp') 
const Profile = require('../../Structures/models/profile') 
const Inventory = require('../../Structures/models/inventory')
const Money = require('../../Structures/models/currency');
const { mapReduce } = require('../../Structures/models/profile');
module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['uses'],
            description: 'Sell items you have in inventory',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            usage: "<id>",
            cooldowns: "10 seconds",
            cd: 10,
        });
    }

    async run(message, args) {
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        const inventory = await Inventory.findOne({
            userID: message.author.id
        })
        const balance = await Money.findOne({
            userID: message.author.id
        })
        const xp = await XP.findOne({
            userID: message.author.id
        })
        if(profile){
            const wbuy = await price.name[args] 
            if(wbuy){
                if(args[0] == "demonic"){
                    if(inventory[args] > 0){
                        var prize = Math.floor(Math.random() * 2000) + 99
                        message.channel.send(`You got ${prize} xp after consuming the Demonic Pill!`)
                        xp.xp += prize;
                        xp.save();
                        profile.inventory -= 1;
                        profile.save();
                        inventory.demonic -= 1;
                        inventory.save();
                    } else if(inventory[args] == 0){
                        message.channel.send("You don't have a demonic Pill")
                    }
                } else if(args[0] == "spirit"){
                    if(inventory[args] > 0){
                        var prize = Math.floor(Math.random() * 3000) + 99
                        message.channel.send(`After using the Spirit Pill for suppressing the evil spirits you manage to get ${prize} spirit stones!`)
                        balance.sstone += prize;
                        balance.save();
                        inventory.spirit -= 1;
                        inventory.save();
                        profile.inventory -= 1;
                        profile.save();
                    } else if(inventory[args] == 0){
                        message.channel.send("You don't have a Spirit Pill")
                    }
                } else if(args[0] == "talisman"){
                    if(inventory[args] > 0){
                        const pill = price.usetalisman[Math.floor(Math.random() * price.usetalisman.length)]
                        message.channel.send(`You have used the talisman to increase your luck/boost charms. You have accidentaly found ${price.name[pill]}!`)
                        inventory[pill] += 1;
                        inventory.save();
                        profile.inventory += 1;
                        profile.save();
                    } else if(inventory[args] == 0){
                        message.channel.send("You don't have a Talisman")
                    }
                } else if(args[0] == "treasure"){
                    if(inventory[args] > 0){
                        var prize = Math.floor(Math.random() * 4500) + 1000
                        message.channel.send(`After opening the Treasure Box you manage to get ${prize} spirit stones!`)
                        balance.sstone += prize;
                        balance.save();
                        inventory.spirit -= 1;
                        inventory.save();
                        profile.inventory -= 1;
                        profile.save();
                    } else if(inventory[args] == 0){
                        message.channel.send("You don't have a Treasure")
                    }
                } else if(args[0] == "box"){
                    if(inventory[args] > 0){
                        var prize = Math.floor(Math.random() * 1500) + 1000
                        message.channel.send(`After opening the Vote Box you manage to get ${prize} spirit stones!`)
                        balance.sstone += prize;
                        balance.save();
                        inventory.spirit -= 1;
                        inventory.save();
                        profile.inventory -= 1;
                        profile.save();
                    } else if(inventory[args] == 0){
                        message.channel.send("You don't have a Vote Box")
                    }
                } else if(args[0] == "raid"){
                    if(inventory[args] > 0){
                        var prize = price.shop[Math.floor(Math.random() * shop.length)]
                        var name = price.name[prize]
                        message.channel.send(`After opening the Vote Box you manage to get ${name} spirit stones!`)
                        inventory[prize] += 1;
                        inventory.save();
                        profile.inventory += 1;
                        profile.save();
                        inventory.raid -= 1;
                        inventory.save();
                    } else if(inventory[args] == 0){
                        message.channel.send("You don't have a Raid Box")
                    }
                } else if(args[0] == "event"){
                    if(inventory[args] > 0){
                        var percentage = Math.floor(Math.random() * 100)
                        if(percentage <= 60){
                            message.channel.send(`You have open the Event Box! You found out that inside the box has ` + x50() + ` Spirit Stones!`)
                            balance.sstone += Number(x50());
                            balance.save();
                            inventory.event -= 1;
                            inventory.save();
                            profile.inventory -= 1;
                            profile.save();
                        } else if(percentage <= 40) {
                            message.channel.send(`You have open the Event Box! You found out that inside the box has ` + x40() + ` Spirit Stones!`)
                            balance.sstone += Number(x40());
                            balance.save();
                            inventory.event -= 1;
                            inventory.save();
                            profile.inventory -= 1;
                            profile.save();
                        } else if(percentage <= 30) {
                            message.channel.send(`You have open the Event Box! You found out that inside the box has ` + x30() + ` Spirit Stones!`)
                            balance.sstone += Number(x30());
                            balance.save();
                            inventory.event -= 1;
                            inventory.save();
                            profile.inventory -= 1;
                            profile.save();
                        } else if(percentage <= 20) {
                            message.channel.send(`You have open the Event Box! You found out that inside the box has ` + x20() + ` Spirit Stones!`)
                            balance.sstone += Number(x20());
                            balance.save();
                            inventory.event -= 1;
                            inventory.save();
                            profile.inventory -= 1;
                            profile.save();
                        } else if(percentage <= 10) {
                            message.channel.send(`You have open the Event Box! You found out that inside the box has ` + x10() + ` Spirit Stones!`)
                            balance.sstone += Number(x10());
                            balance.save();
                            inventory.event -= 1;
                            inventory.save();
                            profile.inventory -= 1;
                            profile.save();
                        } else if(percentage <= 5) {
                            message.channel.send(`You have open the Event Box! You found out that inside the box has ` + x5() + ` Spirit Stones!`)
                            balance.sstone += Number(x5());
                            balance.save();
                            inventory.event -= 1;
                            inventory.save();
                            profile.inventory -= 1;
                            profile.save();
                        }
                        message.channel.send('You have a Event Box.')
                    } else if(inventory[args] == 0){
                        message.channel.send("You don't have a Event Box")
                    }
                } else {
                    message.channel.send("You can't use this item")
                }
            } else if(args[0] != wbuy){
                if(args[0] == "list"){
                    const embed = new MessageEmbed()
                    .setTitle("Description/List of Items")
                    .setDescription("You need to do tc!use <useable item> to use them.")
                    .addField("List and Uses:", [
                        "*Demonic Pill* - Give you 100-2000 xp. More on luck",
                        "*Spirit Pill* - The spirit pill will mysteriously give you a spirit stones 100-3000.",
                        "*Talisman* - It will give you random pill below Superior Grade Pill",
                        "*Spirit Stone Treasure* - Gives the user a Spirit Stone in the range of 1000-5500",
                        "*Vote Box* - Gives the user a Spirit Stone in the range of 1000-2500",
                        "*Raid Box* - Gives the user a random items from the shop!",
                        "*Event Box* - Gives you a random spirit stones. [60% 1-1000, 40% 1001-6000, 30% 6001-20000, 20% 20001-100000, 10% 100001-500000, 5% 500001-1000000"
                    ]);
                    message.channel.send(embed)
                } else {
                    message.channel.send(`That item doesn't even exist.`)
                }
            } else {
                message.channel.send("You didn't choose anything among <list/'useable item'>.")
            }
        } else {
            message.channel.send('You don\'t have a profile yet. Do `tc!create`')
        }
    }
};
function x50(){
    var perc = Math.floor(Math.random() * 1000);
    return perc;
}
function x40(){
    var perc = Math.floor(Math.random() * 5000) + 1000;
    return perc;
}
function x30(){
    var perc = Math.floor(Math.random() * 14000) + 6000;
    return perc;
}
function x20(){
    var perc = Math.floor(Math.random() * 80000) + 20000;
    return perc;
}
function x10(){
    var perc = Math.floor(Math.random() * 400000) + 100000;
    return perc;
}
function x5(){
    var perc = Math.floor(Math.random() * 500000) + 500000;
    return perc;
}