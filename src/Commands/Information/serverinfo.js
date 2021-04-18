const Command = require('../../Structures/Command');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const moment = require('moment');

const filterLevels = {
    DISABLED: 'Off',
    MEMBERS_WITHOUT_ROLES: 'No Role',
    ALL_MEMBERS: 'Everyone'
};
const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: '(╯°□°)╯︵ ┻━┻',
    VERY_HIGH: '┻━┻︵ヽ(°Д°)ﾉ ︵ ┻━┻'
};
const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'Us Central',
    'us-east': 'Us East',
    'us-west': 'Us West',
    'us-south': 'Us South'
};

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['server', 'guild', 'guildinfo', 'servers', 'si'],
            description: 'Gives information of the server you are in.',
            category: '<a:super_info_gifz:747997980354937004>Information',
            ncat: 'Information'
        });
    }

    async run(message) {
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role. toString());
        const members = message.guild.members.cache;
        const emojis =  message.guild.emojis.cache;

        const embed = new MessageEmbed()
            .setDescription(`**Guild Information for __${message.guild.name}__**`)
            .setColor('#00FFFF')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addField('**⊏⊑ᖫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐥 ᖭ⊒⊐**', [
                `**﴿⊱ 𝒩𝒶𝓂𝑒: ** ${message.guild.name}`,
                `**﴿⊱ 𝐼𝒟: ** ${message.guild.id}`,
                `**﴿⊱ 𝒪𝓌𝓃𝑒𝓇: ** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
                `**﴿⊱ 𝑅𝑒𝑔𝒾𝑜𝓃: ** ${regions[message.guild.region]}`,
                `**﴿⊱ 𝐵𝑜𝑜𝓈𝓉 𝒯𝒾𝑒𝓇: ** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
                `**﴿⊱ 𝐸𝓍𝓅𝓁𝒾𝒸𝒾𝓉 𝐹𝒾𝓁𝓉𝑒𝓇: ** ${filterLevels[message.guild.explicitContentFilter]}`,
                `**﴿⊱ 𝒱𝑒𝓇𝒾𝒻𝒾𝒸𝒶𝓉𝒾𝑜𝓃 𝐿𝑒𝓋𝑒𝓁: ** ${verificationLevels[message.guild.verificationLevel]}`,
                `**﴿⊱ 𝒯𝒾𝓂𝑒 𝒞𝓇𝑒𝒶𝓉𝑒: ** ${moment(message.guild.createdAt).format('MMMM Do YYYY')}`,
                `\u200b`
            ])
            .addField('**⊏⊑ᖫ 𝐒𝐭𝐚𝐭𝐢𝐬𝐭𝐢𝐜𝐬 ᖭ⊒⊐**', [
                `**﴿⊱ 𝑅𝑜𝓁𝑒 𝒞𝑜𝓊𝓃𝓉: ** ${roles.length}`,
                `**﴿⊱ 𝐸𝓂𝑜𝒿𝒾 𝒞𝑜𝓊𝓃𝓉: ** ${emojis.size}`,
                `**﴿⊱ 𝑅𝑒𝑔𝓊𝓁𝒶𝓇 𝐸𝓂𝑜𝒿𝒾 𝒞𝑜𝓊𝓃𝓉: ** ${emojis.filter(emoji => !emoji.animated).size}`,
                `**﴿⊱ 𝒜𝓃𝒾𝓂𝒶𝓉𝑒𝒹 𝐸𝓂𝑜𝒿𝒾 𝒞𝑜𝓊𝓃𝓉: ** ${emojis.filter(emoji => emoji.animated).size}`,
                `**﴿⊱ 𝑀𝑒𝓂𝒷𝑒𝓇 𝒞𝑜𝓊𝓃𝓉: ** ${message.guild.memberCount}`,
                `**﴿⊱ 𝐻𝓊𝓂𝒶𝓃𝓈: ** ${members.filter(member => !member.user.bot).size}`,
                `**﴿⊱ 𝐵𝑜𝓉𝓈: ** ${members.filter(member => member.user.bot).size}`,
                `**﴿⊱ 𝐵𝑜𝑜𝓈𝓉 𝒞𝑜𝓊𝓃𝓉: ** ${message.guild.premiumSubscriptionCount || '0'}`,
                `\u200b`
            ])
            .addField('**⊏⊑ᖫ 𝐏𝐫𝐞𝐬𝐞𝐧𝐜𝐞 ᖭ⊒⊐**', [
                `**﴿⊱ 𝒪𝓃𝓁𝒾𝓃𝑒: ** ${members.filter(member => member.presence.status === 'online').size}`,
                `**﴿⊱ 𝐼𝒹𝓁𝑒: ** ${members.filter(member => member.presence.status === 'idle').size}`,
                `**﴿⊱ 𝒟𝑜 𝒩𝑜𝓉 𝒟𝒾𝓈𝓉𝓊𝓇𝒷: ** ${members.filter(member => member.presence.status === 'dnd').size}`,
                `**﴿⊱ 𝒪𝒻𝒻𝓁𝒾𝓃𝑒: ** ${members.filter(member => member.presence.status === 'offline').size}`,
                `\u200b`
            ])
            .setTimestamp();
        message.channel.send(embed);
    }
};