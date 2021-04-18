const Command = require('../../Structures/Command');
const discord = require('discord.js');
const snpm = require('sakuranpm');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['scareds'],
            description: 'Send a gif scared',
            category: '<:cute_reaction_like_kawaii:747999327569575967>Reacts',
            ncat: 'Reacts'
        });
    }

    async run(message) {
    var dance = await snpm.scared();

    const danceembed = new discord.MessageEmbed()
    .setColor('#add8e6')
    .setDescription(message.author.username + " is scared!")
    .setImage(dance)
    message.channel.send(danceembed);
    }
}