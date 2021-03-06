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
            .addField('**ππ¬ππ«**', [ 
                `**ο΄Ώβ± π°πππππΆππ: ** ${member.user.username}`,
                `**ο΄Ώβ± ππΎππΈππΎππΎππΆπππ: ** ${member.user.discriminator}`,
                `**ο΄Ώβ± πΌπ: ** ${member.id}`,
                `**ο΄Ώβ± πΉππΆππ/π΅πΆπΉπππ: ** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
                `**ο΄Ώβ± πππΆππΆπ: ** [Link to Avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                `**ο΄Ώβ± π―πΎππ ππππΆπππΉ: ** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
                `**ο΄Ώβ± π?ππΆπππ: ** ${member.user.presence.status}`,
                `**ο΄Ώβ± π’πΆππ: ** ${member.user.presence.game || 'Not Playing a Game.'}`,
                `\u200b`
            ])
            .addField('**π π²πΊπ―π²πΏ**', [
                `**ο΄Ώβ± π»πΎππ½πππ ππππ: ** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
                `**ο΄Ώβ± π?πππππ π₯ππΎπππΉ ππΆππ: ** ${moment(member.joinedAt).format('LL LTS')}`,
                `**ο΄Ώβ± π»ππΎππ ππππ: ** ${member.roles.hoist ? member.roles.hoist.name : 'None'}`,
                `\u200b`
            ]);
        return message.channel.send(embed);
    }

};