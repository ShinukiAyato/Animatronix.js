const Command = require('../../Structures/Command');
const discord = require('discord.js');
const snpm = require('sakuranpm');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['sads'],
            description: 'Send a gif sad.',
            category: '<:cute_reaction_like_kawaii:747999327569575967>Reacts',
            usage: '[user]',
            ncat: 'Reacts'
        });
    }

    async run(message) {
    const member = message.mentions.members.last();
    let cry = await snpm.sad();

    const cryembed = new discord.MessageEmbed()
    .setColor('#add8e6')
    .setDescription(message.author.username + " is sad")
    .setImage(cry)

    if (!member) return message.channel.send(cryembed);
    if (member.user.username == message.author.username) return message.channel.send(cryembed);

    const crysembed = new discord.MessageEmbed()
    .setColor('#add8e6')
    .setDescription(message.author.username + " is sad right now.\n" + member.user.username + ", they need you.")
    .setImage(cry)

    if (member.user.username != message.author.username) return message.channel.send(crysembed);   
        
    }
}