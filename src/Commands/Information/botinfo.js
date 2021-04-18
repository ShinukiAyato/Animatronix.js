const { MessageEmbed, version: djsversion } = require("discord.js");
const { version } = require('../../../package.json');
const Command = require('../../Structures/Command');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');


module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['info', 'bot', 'bots', 'ib', 'bi'],
            description: 'Gives information of the bot.',
            category: '<a:super_info_gifz:747997980354937004>Information',
            ncat: 'Information'
        });
    }

    run(message) {
        const core = os.cpus()[0];
        const embed = new MessageEmbed()
            .setThumbnail(this.client.user.displayAvatarURL())
            .setColor(message.guild.me.displayHexColor || '#add8e6')
            .addField('**𝔾𝕖𝕟𝕖𝕣𝕒𝕝**', [
                `**﴿⊱ 𝒞𝓁𝒾𝑒𝓃𝓉: ** ${this.client.user.tag} {${this.client.user.id}}`,
                `**﴿⊱ 𝒞𝑜𝓂𝓂𝒶𝓃𝒹𝓈: ** ${this.client.commands.size}`,
                `**﴿⊱ 𝒮𝑒𝓇𝓋𝑒𝓇𝓈: ** ${this.client.guilds.cache.size.toLocaleString()}`,
                `**﴿⊱ 𝒰𝓈𝑒𝓇𝓈: ** ${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
                `**﴿⊱ 𝒞𝓇𝑒𝒶𝓉𝒾𝑜𝓃 𝒟𝒶𝓉𝑒: ** ${utc(this.client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
                `**﴿⊱ 𝒩𝑜𝒹𝑒.𝒿𝓈: ** ${process.version}`,
                `**﴿⊱ 𝒱𝑒𝓇𝓈𝒾𝑜𝓃: ** ${version}`,
                `**﴿⊱ 𝒟𝒾𝓈𝒸𝑜𝓇𝒹.𝒿𝓈: ** ${djsversion}`,
                '**﴿⊱ 𝐵𝑜𝓉 𝒪𝓌𝓃𝑒𝓇: ** ShinukiAyato#4578',
                `\u200b`
            ])
            .addField('**𝕊𝕪𝕤𝕥𝕖𝕞**', [
                `**﴿⊱ 𝒫𝓁𝒶𝓉𝒻𝑜𝓇𝓂: ** ${process.platform}`,
                `**﴿⊱ 𝒰𝓅𝓉𝒾𝓂𝑒: ** ${ms(os.uptime() * 1000, { long: true })}`,
                `**﴿⊱ 𝒞𝒫𝒰:**`,
                `\u3000 𝒞𝑜𝓇𝑒𝓈: ${os.cpus().length}`,
                `\u3000 𝑀𝑜𝒹𝑒𝓁: ${core.model}`,
                `\u3000 𝒮𝓅𝑒𝑒𝒹: ${core.speed}MHz`,
            ])
            .setTimestamp();

        message.channel.send(embed);
    }

};