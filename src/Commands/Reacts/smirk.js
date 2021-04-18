const Command = require('../../Structures/Command');
const discord = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['smirks', 'hehe'],
            description: 'Send a gif smirking',
            category: '<:cute_reaction_like_kawaii:747999327569575967>Reacts',
            ncat: 'Reacts'
        });
    }

    async run(message) {
    var smirk = [
        "https://media1.tenor.com/images/3af6c580ae9f8957f1c1943c41d66050/tenor.gif?itemid=5672659",
        "https://media1.tenor.com/images/6fcfbab36f6d2c578abd6228d1e74231/tenor.gif?itemid=9810121",
        "https://media1.tenor.com/images/3b850bb0dbbdbe4baaa7e539834aa6c8/tenor.gif?itemid=16033329",
        "https://media1.tenor.com/images/3b850bb0dbbdbe4baaa7e539834aa6c8/tenor.gif?itemid=16033329",
        "https://media1.tenor.com/images/dd11b8313236dba83c954c3f0cb0083a/tenor.gif?itemid=6202171",
        "https://media1.tenor.com/images/ad3066e5f05ec16ae49a568a4ac996be/tenor.gif?itemid=16686762",
        "https://media1.tenor.com/images/d2dd8122eac32df3ad87b436b90c3dd5/tenor.gif?itemid=7333081",
        "https://media1.tenor.com/images/0c3c1c1394c9ab4f455873a4336aa3e6/tenor.gif?itemid=11146587",
        "https://media1.tenor.com/images/3a5314f44cbb30a3c7c55a8c136f1f2d/tenor.gif?itemid=5795854",
        "https://media1.tenor.com/images/4477a66d8867d5835375e0d2e17e6394/tenor.gif?itemid=14495309",
        "https://media1.tenor.com/images/fa7120c508b311f2da460aeff9cc144f/tenor.gif?itemid=15779676",
        "https://media1.tenor.com/images/6407bf09a2547a9e51bc6496bfb27dbf/tenor.gif?itemid=12476946",
        "https://media1.tenor.com/images/ff594ff64d670e73db2df69be2b810c2/tenor.gif?itemid=15796762",
        "https://media1.tenor.com/images/d83a46f84236a6ff40923c27051f84cf/tenor.gif?itemid=17364782",
        "https://media1.tenor.com/images/d6d47797a3d40e00cf4ad19b2e84e1e8/tenor.gif?itemid=17376746"
    ]
    var pics = Math.floor((Math.random() * smirk.length))

    const smirkembed = new discord.MessageEmbed()
    .setColor('#add8e6')
    .setDescription(message.author.username)
    .setImage(smirk[pics])
    message.channel.send(smirkembed);
    }
}