const Command = require('../../Structures/Command');
const Discord = require("discord.js");
const { Ameapix } = require("../../../config.json")
const AmeClient = require('amethyste-api');
const AmeAPI = new AmeClient(Ameapix);

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['waste'],
            category: "📸Image",
            description: "make the mentioned user's avatar wasted",
            usage: "[mention]",
            ncat: 'Image'
        });
    }
    async run (message) {
        let user = await message.mentions.members.first() || message.member;
        let m = await message.channel.send("**Please Wait...**");
        let buffer = await AmeAPI.generate("wasted", { url: user.user.displayAvatarURL({ format: "png", size: 512 , dynamic: false }) });
        let attachment = new Discord.MessageAttachment(buffer, "wasted.png");
        m.delete({ timeout: 5000 });
        message.channel.send(attachment);
    }
};