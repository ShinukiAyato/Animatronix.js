const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['invi', 'invites'],
            description: 'Send a link invites about the bot.',
            category: '<a:super_info_gifz:747997980354937004>Information',
            ncat: 'Information'
        });
    }

    async run(message) {
        const embed = new MessageEmbed()
        .setDescription(`**⊏⊑ᖫ The Discord Bots Invite ᖭ⊒⊐**`)
        .setColor('#00FFFF')
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('ℍ𝕖𝕣𝕖 𝕒𝕣𝕖 𝕤𝕠𝕞𝕖 𝕦𝕤𝕖𝕗𝕦𝕝 𝕝𝕚𝕟𝕜𝕤 𝕠𝕗 𝕥𝕙𝕖 𝕓𝕠𝕥. 𝕀𝕗 𝕪𝕠𝕦 𝕙𝕒𝕧𝕖 𝕒𝕟𝕪 𝕢𝕦𝕖𝕤𝕥𝕚𝕠𝕟𝕤, 𝕤𝕦𝕘𝕘𝕖𝕤𝕥𝕚𝕠𝕟 𝕠𝕣 𝕣𝕖𝕡𝕠𝕣𝕥 𝕠𝕟 𝕥𝕙𝕖 𝕓𝕠𝕥 𝕗𝕖𝕖𝕝 𝕗𝕣𝕖𝕖 𝕥𝕠 𝕛𝕠𝕚𝕟 𝕠𝕦𝕣 𝕕𝕚𝕤𝕔𝕠𝕣𝕕 𝕤𝕖𝕣𝕧𝕖𝕣.', [
            `**﴿⊱ 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐁𝐨𝐭 𝐈𝐧𝐯𝐢𝐭𝐞: ** [\`Click Here\`](https://discord.com/oauth2/authorize?client_id=705928336198860860&scope=bot&permissions=336067809)`,
            `**﴿⊱ 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫:** [\`Click Here\`](https://discord.gg/5f7HNNbnmP)`,
            `\u200b`
        ])
        message.channel.send(embed);
    }
}