const Command = require('../../Structures/Command');;
const { MessageEmbed } = require('discord.js')
const aztro = require('aztro-js');
const color = require('../../../color.json')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['horoscopes', 'fortune'],
            description: 'The bot will tell you what your horoscope is!',
            category: '<:dub_with_the_ohhhhhh:747996705814741042>Fun',
            ncat: 'Fun',
            usage: '<your zodiac sign>'
        });
    }

    async run(message, args) {
        let colorx = color[Math.floor(Math.random() * color.length)]
        if(!args[0]) return message.channel.send("You didn\'t give any zodiac sign! Please try again. \nPick `'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'`");
        const xsign = [
            'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra',
            'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
        ]
        if(!xsign.includes(args[0].toLowerCase())) return message.channel.send("Invalid Zodiac Signs! Try Again Please. \nPick `'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'`");
        const embed = new MessageEmbed()
        .setTitle(`Fortune of the **${args[0].toUpperCase()}**`);
        //Get today's horoscope
        aztro.getTodaysHoroscope(args[0].toLowerCase(), function(today){
            embed.addField(`**𝐓𝐨𝐝𝐚𝐲'𝐬 𝐅𝐨𝐫𝐭𝐮𝐧𝐞:**`, [
                `${today.description}\n`,
                `𝐌𝐨𝐨𝐝 ⦔ \`${today.mood}\``,
                `𝐋𝐮𝐜𝐤𝐲 𝐂𝐨𝐥𝐨𝐫 ⦔ \`${today.color}\``,
                `𝐋𝐮𝐜𝐤𝐲 𝐍𝐮𝐦𝐛𝐞𝐫 ⦔ \`${today.lucky_number}\``,
                `𝐂𝐨𝐦𝐩𝐚𝐭𝐢𝐛𝐢𝐥𝐢𝐭𝐲 ⦔ \`${today.compatibility}\``,
                `𝐋𝐮𝐜𝐤𝐲 𝐓𝐢𝐦𝐞 ⦔ \`${today.lucky_time}\``
            ])
            embed.setColor(colorx)
            message.channel.send(embed)
        })
    }
}


/*
if(!args) return message.channel.send('You didn\'t put anything to look up!');
const { url } = await ksoft.images.reddit(args[0], { span: 'all' });
message.channel.send(url);
*/