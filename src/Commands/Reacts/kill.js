const Command = require('../../Structures/Command');
const discord = require('discord.js');
const snpm = require('sakuranpm');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['kills'],
            description: 'Send a gif killing',
            category: '<:cute_reaction_like_kawaii:747999327569575967>Reacts',
            usage: '<mention>',
            ncat: 'Reacts'
        });
    }

    async run(message) {
        const member = message.mentions.members.last();
        var pics = await snpm.kill();

        if (!member) return message.channel.send("Who will you kill? Mention someone.")

        if (member.user.username == message.author.username) return message.channel.send("You can't kill yourself. Master " + message.author.username);

        const kissembed = new discord.MessageEmbed()
        .setColor('#ff08fb')
        .setDescription(message.author.username + " killed " + member.user.username)
        .setImage(pics)

        if (member.user.username != message.author.username) return message.channel.send(kissembed);   
            
    }
}