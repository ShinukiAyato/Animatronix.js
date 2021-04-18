const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['reportbug', 'bugs', 'bugreport'],
            description: 'Type what you report on the bot and it will automatically put into our discord channel where we fix the bugs and errors.',
            category: '⚙️Utilities',
            usage: '<the bugs or report of the bot>',
            ncat: 'Utilities'
        });
    }

    async run(message, args) {
        let Channel = message.client.channels.cache.find(ch => ch.id==="752363061503066132")
        if(!args.length) return message.channel.send("You didn't put any reports!")
        let argz = message.content.replace('tc!bugs', '').replace('tc!reportbug', '').replace('tc!bugreport', '').replace('tc!botreport', '')
        let Embed = new MessageEmbed()
        .setTitle("🙦🙧🙦🙧🙦🙦🙧🙦🙦🙦🙧🙦🙤🙥🙤🙥🙤🙤🙥🙤🙤🙥🙤🙥🙤")
        .setAuthor(`${message.author.username}` , message.author.avatarURL({ dynamic: true }))
        .addField(`**≾ 𝕽𝖊𝖕𝖔𝖗𝖙: ≿**`, [
            `𝖀𝖘𝖊𝖗𝖓𝖆𝖒𝖊: ${message.author.username}\#${message.author.discriminator}`,
            `𝖀𝖘𝖊𝖗𝖓𝖆𝖒𝖊 𝕴𝖉: ${message.author.id}`,
            `𝕿𝖍𝖊 𝕾𝖊𝖗𝖛𝖊𝖗: ${message.guild.name}`,
            `𝕽𝖊𝖕𝖔𝖗𝖙 𝖔𝖋 𝖙𝖍𝖊 𝖚𝖘𝖊𝖗: \n${argz}`
        ])
        .setColor("#FF0000")
        .setTimestamp();
        if(args.length) {
        Channel.send(Embed)
        message.channel.send(`Thank you for reporting to us. To keep up with the updates of our bot do tc!invite`)
        }
    }
}