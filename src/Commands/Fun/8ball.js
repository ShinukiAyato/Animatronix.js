const Command = require('../../Structures/Command');
const discord = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['8bal', '8balls'],
            description: 'Ask a question and the magical 8ball will answer',
            category: '<:dub_with_the_ohhhhhh:747996705814741042>Fun',
            usage: '<question>',
            ncat: 'Fun'
        });
    }

    async run(message, args) {
        let answers = [
            "As I see it, yes.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don’t count on it.",
            "It is certain.",
            "It is decidedly so.",
            "Most likely.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Outlook good.",
            "Reply hazy, try again.",
            "Signs point to yes.",
            "Very doubtful.",
            "Without a doubt.",
            "Yes.",
            "Yes – definitely.",
            "You may rely on it."
        ]
        let subans = answers[Math.floor(Math.random() * answers.length)];
        if(args.join(' ').endsWith('?')) {
            return message.channel.send(`🎱 ${subans}`)
        } else if(!args[0]) {
            return message.channel.send(`🎱 You need a question Master ${message.author.username} please try again.`)
        }else{
            return message.channel.send(`🎱 That is not a valid question Master ${message.author.username}, please try`)
        }
    }

}