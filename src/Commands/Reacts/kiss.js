const Command = require('../../Structures/Command');
const discord = require('discord.js');
const snpm = require('sakuranpm');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['ks', 'kis', 'kisses'],
            description: 'Send a gif kiss to the user that is mentioned.',
            category: '<:cute_reaction_like_kawaii:747999327569575967>Reacts',
            usage: '<user>',
            ncat: 'Reacts'
        });
    }

    async run(message) {
        const member = message.mentions.members.last();
        var pics = await snpm.kiss();
    
        if (!member) return message.channel.send("Who will you kiss? Mention someone.")
    
        const kisssembed = new discord.MessageEmbed()
        .setColor('#ff08fb')
        .setDescription("Animatronix gave " + message.author.username + " a kiss!")
        .setImage(pics)
    
        if (member.user.username == message.author.username) return message.channel.send(kisssembed);
    
        const kissembed = new discord.MessageEmbed()
        .setColor('#ff08fb')
        .setDescription(message.author.username + " kissed " + member.user.username)
        .setImage(pics)
    
        if (member.user.username != message.author.username) return message.channel.send(kissembed);   
            
    }
}