const Command = require('../../Structures/Command');
const discord = require('discord.js');
const snpm = require('sakuranpm');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['hg', 'hugs'],
            description: 'Send a gif hug to the user that is mentioned.',
            category: '<:cute_reaction_like_kawaii:747999327569575967>Reacts',
            usage: '<user>',
            ncat: 'Reacts'
        });
    }

    async run(message) {
        const member = message.mentions.members.last();
        var hug = await snpm.hug();
    
        if (!member) return message.channel.send("Who will you hug? Mention someone.")
    
        const hugsembed = new discord.MessageEmbed()
        .setColor('#ff08fb')
        .setDescription("Animatronix hugged " + message.author.username + " out of pity.")
        .setImage(hug)
    
        if (member.user.username == message.author.username) return message.channel.send(hugsembed);
    
        const hugembed = new discord.MessageEmbed()
        .setColor('#ff08fb')
        .setDescription(message.author.username + " hugged " + member.user.username)
        .setImage(hug)
    
        if (member.user.username != message.author.username) return message.channel.send(hugembed);   
            
    }
}