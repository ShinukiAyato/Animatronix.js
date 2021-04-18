const Command = require('../../Structures/Command');
const discord = require('discord.js');
const moment = require('moment');

const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['user', 'profile', 'ui'],
            description: 'Gives information of the user that is mention or the author.',
            category: '<a:super_info_gifz:747997980354937004>Information',
            usage: '[user]',
            ncat: 'Information'
        });
    }

    async run(message, [target]) {
        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const roles = member.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, -1);
        const userFlags =  member.user.flags.toArray();
        const embed = new discord.MessageEmbed()
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setColor(member.displayHexColor || '#00FFFF')
            .addField('**𝐔𝐬𝐞𝐫**', [ 
                `**﴿⊱ 𝒰𝓈𝑒𝓇𝓃𝒶𝓂𝑒: ** ${member.user.username}`,
                `**﴿⊱ 𝒟𝒾𝓈𝒸𝓇𝒾𝓂𝒾𝓃𝒶𝓉𝑜𝓇: ** ${member.user.discriminator}`,
                `**﴿⊱ 𝐼𝒟: ** ${member.id}`,
                `**﴿⊱ 𝐹𝓁𝒶𝑔𝓈/𝐵𝒶𝒹𝑔𝑒𝓈: ** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
                `**﴿⊱ 𝒜𝓋𝒶𝓉𝒶𝓇: ** [Link to Avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                `**﴿⊱ 𝒯𝒾𝓂𝑒 𝒞𝓇𝑒𝒶𝓉𝑒𝒹: ** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
                `**﴿⊱ 𝒮𝓉𝒶𝓉𝓊𝓈: ** ${member.user.presence.status}`,
                `**﴿⊱ 𝒢𝒶𝓂𝑒: ** ${member.user.presence.game || 'Not Playing a Game.'}`,
                `\u200b`
            ])
            .addField('**𝗠𝗲𝗺𝗯𝗲𝗿**', [
                `**﴿⊱ 𝐻𝒾𝑔𝒽𝑒𝓈𝓉 𝑅𝑜𝓁𝑒: ** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
                `**﴿⊱ 𝒮𝑒𝓇𝓋𝑒𝓇 𝒥𝑜𝒾𝓃𝑒𝒹 𝒟𝒶𝓉𝑒: ** ${moment(member.joinedAt).format('LL LTS')}`,
                `**﴿⊱ 𝐻𝑜𝒾𝓈𝓉 𝑅𝑜𝓁𝑒: ** ${member.roles.hoist ? member.roles.hoist.name : 'None'}`,
                `\u200b`
            ]);
        return message.channel.send(embed);
    }

};