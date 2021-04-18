const Command = require('../../Structures/Command');
const { Fancy1, Fancy2 } = require('../../../text.json');
const { letterTrans } = require('custom-translate');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['fancyt', 'fancy', 'ftext', 'ft'],
            description: 'A fancy text generator.',
            category: '⚙️Utilities',
            usage: '<message>',
            ncat: 'Utilities'
        });
    }

    async run(message, args) {
        const text = message.content.replace('tc!fancytext', '').replace('tc!fancyt', '').replace('tc!fancy', '').replace('tc!ftext', '').replace('tc!ft', '')
        let Embed = new MessageEmbed()
        .addField('Fancy Text 1:',letterTrans(text, Fancy1))
        .addField('Fancy Text 2:',letterTrans(text, Fancy2))
        .addField('Original', text)
        if (!args) return message.channel.send("You didn't put any text!")
        if (text.length > 200) return message.channel.send('Your text is too long! Make it shorter please.')
        if (text.length < 200) return message.channel.send(Embed);
        return null;
    }

};