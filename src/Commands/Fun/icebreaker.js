const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const { IceBreaker } = require('../../../questions.json');
const color = require('../../../color.json');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['iceb', 'ibreaker'],
            description: 'Giving Some Ice Breaker Question.',
            category: '<:dub_with_the_ohhhhhh:747996705814741042>Fun',
            ncat: 'Fun'
        });
    }

    async run(message) {
        const cxx = color[Math.floor(Math.random()*(color.length))]
        var breakerx = IceBreaker[Math.floor(Math.random() * (IceBreaker.length))]
        var questionx = breakerx.question[Math.floor(Math.random() * (breakerx.question.length))]
        const embed = new MessageEmbed()
        .setTitle(`Ice Breaker Quesion! ${breakerx.title}`)
        .setDescription(`${questionx}`)
        .setColor(cxx)
        message.channel.send(embed)
    }
}