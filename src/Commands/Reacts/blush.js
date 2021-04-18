const Command = require('../../Structures/Command');
const discord = require('discord.js');
const snpm = require('sakuranpm');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Send a gif blush',
            category: '<:cute_reaction_like_kawaii:747999327569575967>Reacts',
            ncat: 'Reacts'
        });
    }

    async run(message) {
    var dance = await snpm.blush();

    const danceembed = new discord.MessageEmbed()
    .setColor('#add8e6')
    .setDescription(message.author.username + " is blushing!")
    .setImage(dance)
    message.channel.send(danceembed);
    }
}