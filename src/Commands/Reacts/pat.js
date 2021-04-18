const Command = require('../../Structures/Command');
const discord = require('discord.js');
const snpm = require('sakuranpm');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['p', 'headpat', 'pats', 'head'],
            description: 'Send a gif headpat to the user that is mentioned.',
            category: '<:cute_reaction_like_kawaii:747999327569575967>Reacts',
            usage: '<user>',
            ncat: 'Reacts'
        });
    }

    async run(message) {
        const member = message.mentions.members.last();
    
        var pics = await snpm.pat();
    
        if (!member) return message.channel.send("Who will you pat? Mention someone.")
    
        const patsembed = new discord.MessageEmbed()
        .setColor('#ff08fb')
        .setDescription("Animatronix gave " +message.author.username + " a headpat!")
        .setImage(pics)
    
        if (member.user.username == message.author.username) return message.channel.send(patsembed);
    
        const patembed = new discord.MessageEmbed()
        .setColor('#ff08fb')
        .setDescription(message.author.username + " headpat " + member.user.username)
        .setImage(pics)
    
        if (member.user.username != message.author.username) return message.channel.send(patembed);   
            
    }
}