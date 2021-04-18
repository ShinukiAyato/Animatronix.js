const Command = require('../../Structures/Command');
const Discord = require("discord.js");
const { Ameapix } = require("../../../config.json")
const AmeClient = require('amethyste-api');
const AmeAPI = new AmeClient(Ameapix);

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['jailed'],
            category: "📸Image",
            description: "make the mentioned user's avatar in jail",
            usage: "[mention]",
            ncat: 'Image'
        });
    }
    async run (message) {
        let user = await message.mentions.members.first() || message.member;
        let m = await message.channel.send("**Please Wait...**");
        let buffer = await AmeAPI.generate("jail", { url: user.user.displayAvatarURL({ format: "png", size: 512, dynamic: false }) });
        let attachment = new Discord.MessageAttachment(buffer, "jail.png");
        m.delete({ timeout: 5000 });
        message.channel.send(attachment);
    }
};