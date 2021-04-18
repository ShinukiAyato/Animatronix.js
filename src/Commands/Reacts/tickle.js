const Command = require('../../Structures/Command');
const discord = require('discord.js');
const snpm = require('sakuranpm');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Send a gif tickling other',
            category: '<:cute_reaction_like_kawaii:747999327569575967>Reacts',
            ncat: 'Reacts'
        });
    }

    async run(message) {
        const member = message.mentions.members.last();
        var pics = await snpm.tickle();

        if (!member) return message.channel.send("Who will you tickle? Mention someone.")

        if (member.user.username == message.author.username) return message.channel.send("You can't tickle yourself. Master " + message.author.username);

        const kissembed = new discord.MessageEmbed()
        .setColor('#ff08fb')
        .setDescription(message.author.username + " tickled " + member.user.username)
        .setImage(pics)

        if (member.user.username != message.author.username) return message.channel.send(kissembed);   
           
    }
}