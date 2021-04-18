const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['votes'],
            description: 'Send the vote link of the bot.',
            category: '<a:super_info_gifz:747997980354937004>Information',
            ncat: 'Information'
        });
    }

    async run(message) {
        const embed = new MessageEmbed()
        .setTitle(`**⊏⊑ᖫ Vote ᖭ⊒⊐**`)
        .setDescription(`**﴿⊱ Vote Link: ** [\`Click Here\`](https://top.gg/bot/705928336198860860)`)
        .setColor('#00FFFF')
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        message.channel.send(embed);
    }
}