const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['h', 'helps'],
            description: 'Send List of Commands',
            category: '<a:super_info_gifz:747997980354937004>Information',
            usage: '[command]',
            ncat: 'Information'
        });
    }

    async run(message, [command]) {
        const embed = new MessageEmbed()
            .setColor('#00FFFF')
            .setAuthor(`${message.guild.name} Help Menu`, message.guild.iconURL({ dynamic: true }))
            .setThumbnail(this.client.user.displayAvatarURL())
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp();

        if (command) {
            const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command))
            let categoriez;
            if (!this.client.owners.includes(message.author.id)) {
                categoriez = this.client.utils.removeDuplicates(this.client.commands.filter(cmd => cmd.ncat !== 'Owner').map(cmd => cmd.ncat));
            } else {
                categoriez = this.client.utils.removeDuplicates(this.client.commands.map(cmd => cmd.ncat));
            }
            if(categoriez.includes(command)) {
                embed.setDescription([
                    `These are the available commands for ${message.guild.name}`,
                    `The bot's prefix is: ${this.client.prefix}`,
                    `Command Parameters: \`<>\` is strict & \`[]\` is optional`,
                ]);
                embed.addField(`**${this.client.utils.capitalise(command)}**`, this.client.commands.filter(cmd =>
                    cmd.ncat === command).map(cmd => `\`${cmd.name}\``).join(' '));
                    embed.addField(`For more information of the command do ${this.client.prefix}help <command>`, `\n[\`Invite the Bot\`](https://discord.com/oauth2/authorize?client_id=705928336198860860&scope=bot&permissions=523473)`)
                return message.channel.send(embed);

            } else if (!cmd) return message.channel.send(`Invalid Command/Category named. \`${command}\``); 

            else {
                embed.setAuthor(`${this.client.utils.capitalise(cmd.name)} Command Help`, this.client.user.displayAvatarURL());
                embed.setDescription([
                    `**﴿⊱ 𝒜𝓁𝒾𝒶𝓈𝑒𝓈: ** ${cmd.aliases.length ? cmd.aliases.map(alias => `\`${alias}\``).join(' ') : 'No Alieses'}`,
                    `**﴿⊱ 𝒟𝑒𝓈𝒸𝓇𝒾𝓅𝓉𝒾𝑜𝓃: ** ${cmd.description}`,
                    `**﴿⊱ 𝒞𝒶𝓉𝑒𝑔𝑜𝓇𝓎: ** ${cmd.category}`,
                    `**﴿⊱ 𝒰𝓈𝒶𝑔𝑒: ** ${cmd.usage}`,
                    `**﴿⊱ 𝒞𝑜𝑜𝓁𝒹𝑜𝓌𝓃𝓈: ** ${cmd.cooldowns} `
                ]);
                return message.channel.send(embed);
            }
        } else {
            embed.setDescription([
                `These are the available commands for ${message.guild.name}`,
                `The bot's prefix is: ${this.client.prefix}`,
                `Command Parameters: \`<>\` is strict & \`[]\` is optional`,
            ]);
            let categories;
            if (!this.client.owners.includes(message.author.id)) {
                categories = this.client.utils.removeDuplicates(this.client.commands.filter(cmd => cmd.category !== 'Owner').map(cmd => cmd.category));
            } else {
                categories = this.client.utils.removeDuplicates(this.client.commands.map(cmd => cmd.category));
            }
            for (const category of categories) {
                embed.addField(`**${this.client.utils.capitalise(category)}**`, `type \`tc!help ${
                    this.client.utils.removeDuplicates(this.client.commands.filter(cmd => cmd.category === category).map(cmd => cmd.ncat))
                }\` for more information`);
            }
            embed.addField(`For more information of the command do ${this.client.prefix}help <command>`, `\n[\`Invite the Bot\`](https://discord.com/oauth2/authorize?client_id=705928336198860860&scope=bot&permissions=523473)`)
            return message.channel.send(embed);
        }
    } 

};