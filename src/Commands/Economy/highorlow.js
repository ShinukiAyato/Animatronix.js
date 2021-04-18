const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js')
const mongoose = require('mongoose');
const rcolor = require('../../../color.json')
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
            aliases: ['hol'],
            description: 'Bet your spirit stone with high or low game.',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            usage: "<bet>",
            cooldowns: "10 seconds",
            cd: 10,
        });
    }

    async run(message, args) {
        const cxlor = rcolor[Math.floor(Math.random() * rcolor.length)]
        const balance = await Money.findOne({
            userID: message.author.id
        })
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        if(profile){
            const xarg = Math.floor(Number(args[0]))
            if(!xarg) return message.channel.send('You need to put something to bet!');
            if(isNaN(xarg)) return message.channel.send('Make sure that you put a decent number to bet!')
            if(xarg == 0) return message.channel.send('You can\'t bet 0. Please try again.')
            if(xarg >= 1001) return message.channel.send(`The max bet is only 1000!`);
            if(xarg > balance.sstone) return message.channel.send('You don\'t have that much spirit stone.');
            const cards = {
                card: [
                    "A",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "J",
                    "Q",
                    "K"
                ],
                count: {
                    "A": 1,
                    "2": 2,
                    "3": 3,
                    "4": 4,
                    "5": 5,
                    "6": 6,
                    "7": 7,
                    "8": 8,
                    "9": 9,
                    "10": 10,
                    "J": 11,
                    "Q": 12,
                    "K": 13
                },
                shape: [
                    "♡",
                    "♢",
                    "♤",
                    "♧"
                ],
                shapecount: {
                    "♡": "3",
                    "♢": "2",
                    "♤": "4",
                    "♧": "1"
                }
            }
            const holuser = cards.card[Math.floor(Math.random() * cards.card.length)]
            const holbot = cards.card[Math.floor(Math.random() * cards.card.length)]
            const hol1 = cards.count[holuser]
            const hol2 = cards.count[holbot]
            const shapex = cards.shape[Math.floor(Math.random() * cards.shape.length)]
            const shape1 = cards.shapecount[shapex]
            const shapey = cards.shape[Math.floor(Math.random() * cards.shape.length)]
            const shape2 = cards.shapecount[shapey]
            const embed = new MessageEmbed()
            .setTitle("High or Low")
            .setDescription(`The First Card you got is ${shapex}${holuser}! Will you pick high or low?`)
            .setColor(cxlor)
            .setFooter('You only have 1 chance and 30 seconds to guess it!');
            message.channel.send(embed)
            try {
                let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                if(msgs.first().content.toLowerCase()== 'low'){
                    if(hol1 > hol2){
                        message.channel.send('You Won!' + ` The Dealer got ${shapey}${holbot}`)
                        return win(xarg);
                    } else if(hol1 == hol2){
                        if(hol1 > hol2){
                            message.channel.send('You Won!' + ` The Dealer got ${shapey}${holbot}`)
                            return win(xarg);
                        } else {
                            message.channel.send('You Lost!' + ` The Dealer got ${shapey}${holbot}`)
                            return lose(xarg);
                        }
                    } else {
                        message.channel.send('You Lost!' + ` The Dealer got ${shapey}${holbot}`)
                        return lose(xarg);
                    }
                } else if(msgs.first().content.toLowerCase()== 'high'){
                    if(hol2 > hol1){
                        message.channel.send('You Won!' + ` The Dealer got ${shapey}${holbot}`)
                        return win(xarg);
                    } else if(hol1 == hol2){
                        if(shape2 > shape1){
                            message.channel.send('You Won!' + ` The Dealer got ${shapey}${holbot}`)
                            return win(xarg);
                        } else {
                            message.channel.send('You Lost!' + ` The Dealer got ${shapey}${holbot}`)
                            return lose(xarg);
                        }
                    } else {
                        message.channel.send('You Lost!' + ` The Dealer got ${shapey}${holbot}`)
                        return lose(xarg);
                    }
                } else {
                    message.channel.send('You didn\'t choose among the choices and that will cost the command to cancel and you will be deducted 100 spirit stone!')
                    return intentional();
                }
            }catch(e){
                message.channel.send(`You didn't answer in time! Canceling the command. You will be deducted of 100 spirit stones because of not answer!`)
                return intentional();
            }
        } else {
            message.channel.send('You don\'t have a profile yet. Do `tc!create`')
        }
        function lose(a){
            balance.sstone -= Number(a);
            balance.save();
        }
        function win(a){
            balance.sstone += Number(a);
            balance.save();
        }
        function intentional(){
            balance.sstone -= Number(100);
            balance.save();
        }
    }
};
