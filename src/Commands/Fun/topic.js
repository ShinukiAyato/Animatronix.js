const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const { Topic } = require('../../../questions.json');
const color = require('../../../color.json');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['topics'],
            description: 'Give some good topic. Choose anime/gaming/normal topic',
            category: '<:dub_with_the_ohhhhhh:747996705814741042>Fun',
            usage: '<anime/normal/gaming>',
            ncat: 'Fun'
        });
    }

    async run(message) {
        let argz = message.content.replace('tc!topics', '').replace('tc!topic', '').replace(' ', '').toLowerCase()
        const cxx = color[Math.floor(Math.random()*(color.length))]
        var tnormal = Topic.normal[Math.floor(Math.random() * (Topic.normal.length))]
        var tanime = Topic.anime[Math.floor(Math.random() * (Topic.anime.length))]
        var tgaming = Topic.gaming[Math.floor(Math.random() * (Topic.gaming.length))]
        const embed = new MessageEmbed()
        .setColor(cxx)

        if(argz === "anime"){

            embed.setTitle(`Anime Topic!`)
            embed.setDescription(`${tanime}`)
            message.channel.send(embed)

        }else if(argz === "normal"){

            embed.setTitle(`Normal Topic!`)
            embed.setDescription(`${tnormal}`)
            message.channel.send(embed)

        }else if(argz === "gaming"){

            embed.setTitle(`Gaming Topic!`)
            embed.setDescription(`${tgaming}`)
            message.channel.send(embed)

        }else if(!argz){

            embed.setTitle('You need to do.')
            embed.setDescription(`Please pick from the choices (normal/anime/gaming). tc!topic <choices>`)
            message.channel.send(embed)

        }else{
            message.reply(`You choose none of the choices. Please try again.`)
        }
    }
}