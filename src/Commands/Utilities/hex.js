const Command = require('../../Structures/Command');
const { Hex } = require('../../../text.json');
const { letterTrans } = require('custom-translate');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ["hexs"],
            description: 'Normal to Hex language. The only thing that can be converted is A-Z, a-z and 0-9',
            category: '⚙️Utilities',
            usage: '<message>',
            ncat: 'Utilities'
        });
    }

    async run(message, args) {
        const text = message.content.replace('tc!hexs', '').replace('tc!hex', '')
        let Embed = new MessageEmbed()
        .addField('Hex:',letterTrans(text, Hex))
        .addField('Original', text)
        if (!args) return message.channel.send("You didn't put any text!")
        if (text.length > 100) return message.channel.send('Your text is too long! Make it shorter please.')
        if (text.length < 100) return message.channel.send(Embed);
        return null;
    }

};