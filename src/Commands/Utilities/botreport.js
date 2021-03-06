const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['reportbug', 'bugs', 'bugreport'],
            description: 'Type what you report on the bot and it will automatically put into our discord channel where we fix the bugs and errors.',
            category: 'βοΈUtilities',
            usage: '<the bugs or report of the bot>',
            ncat: 'Utilities'
        });
    }

    async run(message, args) {
        let Channel = message.client.channels.cache.find(ch => ch.id==="752363061503066132")
        if(!args.length) return message.channel.send("You didn't put any reports!")
        let argz = message.content.replace('tc!bugs', '').replace('tc!reportbug', '').replace('tc!bugreport', '').replace('tc!botreport', '')
        let Embed = new MessageEmbed()
        .setTitle("π¦π§π¦π§π¦π¦π§π¦π¦π¦π§π¦π€π₯π€π₯π€π€π₯π€π€π₯π€π₯π€")
        .setAuthor(`${message.author.username}` , message.author.avatarURL({ dynamic: true }))
        .addField(`**βΎ π½πππππ: βΏ**`, [
            `ππππππππ: ${message.author.username}\#${message.author.discriminator}`,
            `ππππππππ π΄π: ${message.author.id}`,
            `πΏππ πΎπππππ: ${message.guild.name}`,
            `π½πππππ ππ πππ ππππ: \n${argz}`
        ])
        .setColor("#FF0000")
        .setTimestamp();
        if(args.length) {
        Channel.send(Embed)
        message.channel.send(`Thank you for reporting to us. To keep up with the updates of our bot do tc!invite`)
        }
    }
}