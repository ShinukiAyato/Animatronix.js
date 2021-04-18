const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const { AnimeMc } = require('../../../questions.json');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['mcs', 'animesmc', 'mc'],
            description: 'Send A Random Anime Character and try to guess who it is.',
            category: '🎮Games',
            ncat: 'Games'
        });
    }

    async run(message) {
        let questions = (AnimeMc)
        
        let q = questions[Math.floor(Math.random()*(questions.length))]
        const Embed = new MessageEmbed()
        .setTitle(q.title)
        .setDescription(q.levelz)
        .setImage(q.question)
        .setFooter('Reply to this message with the correct answer within 30 seconds. Case is in sensitivity.')
        .setColor('#00FFFF')
        message.channel.send(Embed)
        try {
            let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
            if((msgs.first().content.replace(".", "").toLowerCase())==q.correct.replace('.', '').toLowerCase()){
                return message.channel.send('You got it correct!')
            } else {
                return message.channel.send(`You got it incorrect! The answer is ${q.correct}`)
            }
        }catch(e){
            return message.channel.send(`You did not got it in time to answer! The Answer is ${q.correct}`)
        }
    }
}