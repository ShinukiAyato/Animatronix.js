const Command = require('../../Structures/Command');
const color = require('../../../color.json');
var RouletteWheel = require('../../Custom NPM/round');
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
            aliases: ['rwheel', 'roulettewheel', 'rwheels'],
            description: 'Play a game of Roulette Wheel where you bet with your spirit stone.',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: 'Economy',
            usage: "<bet>",
            cooldowns: "10 seconds",
            cd: 10,
        });
    }

    async run(message, args) {
        const cxx = color[Math.floor(Math.random()*(color.length))]
        const balance = await Money.findOne({
            userID: message.author.id
        })
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        if(profile){
            const xarg = Math.floor(Number(args[0]))
            if(!xarg) return message.channel.send('You need to put something to bet!');
            if(xarg >= 2001 || xarg <= 499) return message.channel.send(`The max bet is only 2000 and min bet is only 500!`);
            if(isNaN(xarg)) return message.channel.send('Make sure that you put a decent number to bet!')
            if(xarg == 0) return message.channel.send('You can\'t bet 0. Please try again.')
            if(xarg > balance.sstone) return message.channel.send('You don\'t have that much spirit stone.');
            //requires each individual have a name and val for fitness

            const question1 = new MessageEmbed()
            .setTitle('**Pick what you bet in**')
            .setDescription('Betting Multiplers: ```1.2x = red/black\n1.3x = odd/even\n1.5x = 1sth/2ndh\n1.8x = 1st/2nd/3rd\n2x = <1-36>\n5x = 0```')
            .addField('id: `1st`', '1st row of the table(1/4/7/10/13/16/19/22/25/28/31/34)')
            .addField('id: `2nd`', '2nd row of the table(2/5/8/11/14/17/20/23/26/29/32/35)')    
            .addField('id: `3nd`', '3nd row of the table(3/6/9/12/15/18/21/24/27/30/33/36)')
            .addField('id: `1sth`', '1st half(1-18)')
            .addField('id: `2ndh`', '2nd half(19-36)')
            .addField('id: `0-36`', 'You can only bet 1 number.')
            .setFooter('You only have 35 seconds to bet if you don\'t bet immediately or didn\'t bet in the betting table you will be deducted 200 spirit stones!')
            .setImage('https://media.discordapp.net/attachments/756129086849417298/797853431423041566/4591220b8895fb51801e4e1056f8fd47.png')
            .setColor(cxx);
            message.channel.send(question1)
            try{
                var fitnesses = [
                    {name:"1", type:"red", eod:"odd", row:"1st", half: "1sth", val:100},
                    {name:"2", type:"black", eod:"even", row:"2nd", half: "1sth", val:100},
                    {name:"3", type:"red", eod:"odd", row:"3rd", half: "1sth", val:100},
                    {name:"4", type:"black", eod:"even", row:"1st", half: "1sth", val:100},
                    {name:"5", type:"red", eod:"odd", row:"2nd", half: "1sth", val:100},
                    {name:"6", type:"black", eod:"even", row:"3rd", half: "1sth", val:100},
                    {name:"7", type:"red", eod:"odd", row:"1st", half: "1sth", val:100},
                    {name:"8", type:"black", eod:"even", row:"2nd", half: "1sth", val:100},
                    {name:"9", type:"red", eod:"odd", row:"3rd", half: "1sth", val:100},
                    {name:"10", type:"black", eod:"even", row:"1st", half: "1sth", val:100},
                    {name:"11", type:"black", eod:"odd", row:"2nd", half: "1sth", val:100},
                    {name:"12", type:"red", eod:"even", row:"3rd", half: "1sth", val:100},
                    {name:"13", type:"black", eod:"odd", row:"1st", half: "1sth", val:100},
                    {name:"14", type:"red", eod:"even", row:"2nd", half: "1sth", val:100},
                    {name:"15", type:"black", eod:"odd", row:"3rd", half: "1sth", val:100},
                    {name:"16", type:"red", eod:"even", row:"1st", half: "1sth", val:100},
                    {name:"17", type:"black", eod:"odd", row:"2nd", half: "1sth", val:100},
                    {name:"18", type:"red", eod:"even", row:"3rd", half: "1sth", val:100},
                    {name:"19", type:"red", eod:"odd", row:"1st", half: "2ndh", val:100},
                    {name:"20", type:"black", eod:"even", row:"2nd", half: "2ndh", val:100},
                    {name:"21", type:"red", eod:"odd", row:"3rd", half: "2ndh", val:100},
                    {name:"22", type:"black", eod:"even", row:"1st", half: "2ndh", val:100},
                    {name:"23", type:"red", eod:"odd", row:"2nd", half: "2ndh", val:100},
                    {name:"24", type:"black", eod:"even", row:"3rd", half: "2ndh", val:100},
                    {name:"25", type:"red", eod:"odd", row:"1st", half: "2ndh", val:100},
                    {name:"26", type:"black", eod:"even", row:"2nd", half: "2ndh", val:100},
                    {name:"27", type:"red", eod:"odd", row:"3rd", half: "2ndh", val:100},
                    {name:"28", type:"black", eod:"even", row:"1st", half: "2ndh", val:100},
                    {name:"29", type:"black", eod:"odd", row:"2nd", half: "2ndh", val:100},
                    {name:"30", type:"red", eod:"even", row:"3rd", half: "2ndh", val:100},
                    {name:"31", type:"black", eod:"odd", row:"1st", half: "2ndh", val:100},
                    {name:"32", type:"red", eod:"even", row:"2nd", half: "2ndh", val:100},
                    {name:"33", type:"black", eod:"odd", row:"3rd", half: "2ndh", val:100},
                    {name:"34", type:"red", eod:"even", row:"1st", half: "2ndh", val:100},
                    {name:"35", type:"black", eod:"odd", row:"2nd", half: "2ndh", val:100},
                    {name:"36", type:"red", eod:"even", row:"3rd", half: "2ndh", val:100},
                    {name:"0", type:"green", val:10},
                ]
                //optionally pass in precision for decimal fitness values
                var rw = new RouletteWheel({fitnesses:fitnesses, precision:3})
                
                const xmessage = xarg
                const winning = await rw.spin().target
                let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 35000, max: 1, errors: ["time"]})
                let answer = msgs.first().content.toLowerCase()
                if(Number(answer) >= 0){
                    if(Number(answer) = 0){
                        if(answer == winning.name){
                            return xwin(Number(answer), xmessage, 5, winning)
                        } else {
                            return xlost(xmessage, answer, winning)
                        }
                    } else {
                        if(answer == winning.name){
                            return xwin(Number(answer), xmessage, 2, winning)
                        } else {
                            return xlost(xmessage, answer, winning)
                        }
                    }
                } else if(answer == "1st"){
                    if(answer == winning.row){
                        return xwin(answer, xmessage, 1.8, winning)
                    } else {
                        return xlost(xmessage, answer, winning)
                    }
                } else if(answer == "2nd"){
                    if(winning.row == answer){
                        return xwin(answer, xmessage, 1.8, winning)
                    } else {
                        return xlost(xmessage, answer, winning)
                    }
                } else if(answer == "3rd"){
                    if(winning.row == answer){
                        return xwin(answer, xmessage, 1.8, winning)
                    } else {
                        return xlost(xmessage, answer, winning)
                    }
                } else if(answer == "1sth"){
                    if(winning.half == answer){
                        return xwin(answer, xmessage, 1.5, winning)
                    } else {
                        return xlost(xmessage, answer, winning)
                    }
                } else if(answer == "2ndh"){
                    if(winning.half == answer){
                        return xwin(answer, xmessage, 1.5, winning)
                    } else {
                        return xlost(xmessage, answer, winning)
                    }
                } else if(answer == "odd"){
                    if(winning.eod == answer){
                        return xwin(answer, xmessage, 1.3, winning)
                    } else {
                        return xlost(xmessage, answer, winning)
                    }
                } else if(answer == "even"){
                    if(winning.eod == answer){
                        return xwin(answer, xmessage, 1.3, winning)
                    } else {
                        return xlost(xmessage, answer, winning)
                    }
                } else if(answer == "red"){
                    if(winning.type == answer){
                        return xwin(answer, xmessage, 1.2, winning)
                    } else {
                        return xlost(xmessage, answer, winning)
                    }
                } else if(answer == "black"){
                    if(winning.type == answer){
                        return xwin(answer, xmessage, 1.2, winning)
                    } else {
                        return xlost(xmessage, answer, winning)
                    }
                } else {
                    message.channel.send(`You did not choose in the betting table you will be deducted 200 spirit stones!`)
                }
            }catch(e){
                message.channel.send(`You didn't answer in time. 200 spirit stones will be deducted in your account!`)
            }
        } else {
            message.channel.send('You don\'t have a profile yet. Do `tc!create`')
        }
        async function xwin(xnum, bet, multiplier, chipx){
            const multips = Math.floor(Number(bet) * Number(multiplier))
            const final = Number(multips) - Number(bet)
            message.channel.send(`It landed on \`${chipx.name}\`Congratulation! You won by betting \`${xnum}\`. You have won ${multips} spirit stones`)
            balance.sstone += Number(final)
            balance.save();
        }
        async function xlost(bet, xnum, chipx){
            message.channel.send(`It landed on \`${chipx.name}\` sadly you pick \`${xnum}\`. You have lost ${bet} spirit stones`)
            balance.sstone -= Number(bet)
            balance.save();
        }
    }
}

/*
if(!args) return message.channel.send('You didn\'t put anything to look up!');
const { url } = await ksoft.images.reddit(args[0], { span: 'all' });
message.channel.send(url);
*/