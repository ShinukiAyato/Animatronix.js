const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['botsug', 'suggestbot', 'bs'],
            description: 'Type what you suggest on the bot and it will automatically put into our discord channel where we will look into it.',
            category: 'βοΈUtilities',
            usage: '<the suggestion of the bot>',
            ncat: 'Utilities'
        });
    }

    async run(message, args) {
        let Channel = message.client.channels.cache.find(ch => ch.id==="752363061503066132")
        if(!args.length) return message.channel.send("You didn't put any suggestions!")
        let argz = message.content.replace('tc!suggestbot', '').replace('tc!botsuggest', '').replace('tc!botsug', '').replace('tc!bs', '')
        let Embed = new MessageEmbed()
        .setTitle("π¦π§π¦π§π¦π¦π§π¦π¦π¦π§π¦π€π₯π€π₯π€π€π₯π€π€π₯π€π₯π€")
        .setAuthor(`${message.author.username}` , message.author.avatarURL({ dynamic: true }))
        .addField(`**βΎ πΎππππππ: βΏ**`, [
            `ππππππππ: ${message.author.username}\#${message.author.discriminator}`,
            `ππππππππ π΄π: ${message.author.id}`,
            `πΏππ πΎπππππ: ${message.guild.name}`,
            `πΎππππππ ππ πππ ππππ: \n${argz}`
        ])
        .setColor("#86ff9d")
        .setTimestamp();
        if(args.length) {
        Channel.send(Embed)
        message.channel.send(`Thank you for suggesting to us. To keep up with the updates of our bot do tc!invite`)
        }
    }
}