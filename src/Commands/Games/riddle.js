const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const { Riddle } = require('../../../questions.json');
const color = require('../../../color.json');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['riddles'],
            description: 'Test how good/pervert is your mind with normal/green riddles. Choose <green/normal>',
            category: '🎮Games',
            usage: '<green/normal>',
            ncat: 'Games'
        });
    }

    async run(message) {
        let argz = message.content.replace('tc!riddles', '').replace('tc!riddle', '').replace(' ', '').toLowerCase()
        const cxx = color[Math.floor(Math.random()*(color.length))]
        const embed = new MessageEmbed()
        .setColor(cxx)

        if(argz === "green"){
            var q = Riddle.green[Math.floor(Math.random() * (Riddle.green.length))]
            embed.setTitle(q.title)
            embed.setDescription(q.question)
            embed.setFooter('Reply to this message with the correct answer within 30 seconds. Small letters all.')
            message.channel.send(embed)
            try {
                let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                if((msgs.first().content.toLowerCase())==q.correct){
                    return message.channel.send('You got it correct!')
                } else {
                    return message.channel.send(`It's not ${msgs.first().content}. The correct answer is ${q.correct}.`)
                }
            }catch(e){
                return message.channel.send(`You did not got it in time to answer! The Answer is ${q.correct}`)
            }
        }else if(argz === "normal"){
            var q = Riddle.normal[Math.floor(Math.random() * (Riddle.normal.length))]
            embed.setTitle(q.title)
            embed.setDescription(q.question)
            embed.setFooter('Reply to this message with the correct answer within 30 seconds. Small letters all.')
            message.channel.send(embed)
            try {
                let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                if((msgs.first().content.toLowerCase())==q.correct){
                    return message.channel.send('You got it correct!')
                } else {
                    return message.channel.send(`It's not ${msgs.first().content}. The correct answer is ${q.correct}.`)
                }
            }catch(e){
                return message.channel.send(`You did not got it in time to answer! The Answer is ${q.correct}`)
            }
        }else if(!argz){

            embed.setTitle('You need to do.')
            embed.setDescription(`Please pick from the choices (normal/green). tc!riddle <choices>`)
            message.channel.send(embed)

        }else{
            message.reply(`You choose none of the choices. Please try again.`)
        }
    }
}