const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['botsug', 'suggestbot', 'bs'],
            description: 'Type what you suggest on the bot and it will automatically put into our discord channel where we will look into it.',
            category: '⚙️Utilities',
            usage: '<the suggestion of the bot>',
            ncat: 'Utilities'
        });
    }

    async run(message, args) {
        let Channel = message.client.channels.cache.find(ch => ch.id==="752363061503066132")
        if(!args.length) return message.channel.send("You didn't put any suggestions!")
        let argz = message.content.replace('tc!suggestbot', '').replace('tc!botsuggest', '').replace('tc!botsug', '').replace('tc!bs', '')
        let Embed = new MessageEmbed()
        .setTitle("🙦🙧🙦🙧🙦🙦🙧🙦🙦🙦🙧🙦🙤🙥🙤🙥🙤🙤🙥🙤🙤🙥🙤🙥🙤")
        .setAuthor(`${message.author.username}` , message.author.avatarURL({ dynamic: true }))
        .addField(`**≾ 𝕾𝖚𝖌𝖌𝖊𝖘𝖙: ≿**`, [
            `𝖀𝖘𝖊𝖗𝖓𝖆𝖒𝖊: ${message.author.username}\#${message.author.discriminator}`,
            `𝖀𝖘𝖊𝖗𝖓𝖆𝖒𝖊 𝕴𝖉: ${message.author.id}`,
            `𝕿𝖍𝖊 𝕾𝖊𝖗𝖛𝖊𝖗: ${message.guild.name}`,
            `𝕾𝖚𝖌𝖌𝖊𝖘𝖙 𝖔𝖋 𝖙𝖍𝖊 𝖚𝖘𝖊𝖗: \n${argz}`
        ])
        .setColor("#86ff9d")
        .setTimestamp();
        if(args.length) {
        Channel.send(Embed)
        message.channel.send(`Thank you for suggesting to us. To keep up with the updates of our bot do tc!invite`)
        }
    }
}