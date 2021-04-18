const Command = require('../../Structures/Command');
const discord = require('discord.js');
const akaneko = require("akaneko");

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ["hglass", "hnerds", "hnerd"],
            description: 'Give some pictures of some hentai glasses',
            category: '🔞NSFW',
            ncat: "NSFW",
            cd: 1,
            cooldowns: "1 second"
        });
    }

    async run(message) {
        let XD = [
            "I'm sorry Master! But this stuff belongs in NSFW channels!",
            "I can't post this here! Master please direct me to a NSFW channel!",
            "This doesn't look like a NSFW channel!",
            "Please try again in a NSFW channel!",
            "u///u, I can't post that here Master.",
            "W-What? I can't post that here! u///u",
            "B-Baka! I can't post that here! pervert 0///0",
            "Senpai...don't make me post that here.",
            "Master lets do it in a NSFW channel.",
            "My Master is a perv posting in a NSFW channel. 0///0"
        ]

        var errMessage = XD[Math.round(Math.random() * (XD.length - 1))];
        if (!message.channel.nsfw) {
            message.react('💢');
            message.channel.send(errMessage);
        } else {
            const embed = new discord.MessageEmbed();
            embed.setImage(await akaneko.nsfw.glasses());
            message.channel.send(embed);
        }
    }

}