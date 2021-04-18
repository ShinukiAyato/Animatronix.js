const Command = require('../../Structures/Command');
const discord = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['rk', 'rkicks'],
            description: 'Send gif kick to the user that is mentioned.',
            category: '<:cute_reaction_like_kawaii:747999327569575967>Reacts',
            usage: '<user>',
            ncat: 'Reacts'
        });
    }

    async run(message) {
    const member = message.mentions.members.first();
    var kick = [
        "https://media1.tenor.com/images/fb2a19c9b689123e6254ad9ac6719e96/tenor.gif?itemid=4922649",
        "https://media1.tenor.com/images/fb2a19c9b689123e6254ad9ac6719e96/tenor.gif?itemid=4922649",
        "https://media1.tenor.com/images/4dd99934237218f35c02b7cbf4ac9f9f/tenor.gif?itemid=16580938",
        "https://media1.tenor.com/images/cc217519af48fe13bea6004afb36f1f2/tenor.gif?itemid=5738223",
        "https://media1.tenor.com/images/cc217519af48fe13bea6004afb36f1f2/tenor.gif?itemid=5738223",
        "https://media1.tenor.com/images/742bf7f07689d8ed1e0b1775caec520e/tenor.gif?itemid=13992098",
        "https://media1.tenor.com/images/b98401fb2a6981c05b064bf7ec148482/tenor.gif?itemid=16419384",
        "https://media1.tenor.com/images/79c85e779215421381cb20c93123c3de/tenor.gif?itemid=16836989",
        "https://media1.tenor.com/images/79c85e779215421381cb20c93123c3de/tenor.gif?itemid=16836989",
        "https://media1.tenor.com/images/f6157452e70e127fca276c6981d9e387/tenor.gif?itemid=13610775",
        "https://media1.tenor.com/images/46e63f496654ba22f7a34fa5628d8ed9/tenor.gif?itemid=17536300",
        "https://media1.tenor.com/images/0ef933cc7febed3edd0476cd8040f142/tenor.gif?itemid=5634605",
        "https://media1.tenor.com/images/577ecef137a88a9149f375d225724b34/tenor.gif?itemid=15524285",
        "https://media1.tenor.com/images/308ebe52a9bcf8fdf730f5076554a542/tenor.gif?itemid=15974215",
        "https://media1.tenor.com/images/512237811f16e8ece9dd7660cd26fdcc/tenor.gif?itemid=14047169",
        "https://media1.tenor.com/images/80b0ef35bf24df5e70fb34f6e456c3f1/tenor.gif?itemid=13726355",
        "https://media1.tenor.com/images/b01e74e8f9caf6ad7930865666951c04/tenor.gif?itemid=17369990"
    ]
    var pics = Math.floor((Math.random() * kick.length))

    const kickembed = new discord.MessageEmbed()
    .setColor('#add8e6')
    .setDescription("You can't kick yourself. Mention somebody else again.")

    const kickxsembed = new discord.MessageEmbed()
    .setColor('#add8e6')
    .setDescription("Who do you wanna kick? Mention someone again.")

    if (!member) return message.channel.send(kickxsembed);
    if (member.user.username == message.author.username) return message.channel.send(kickembed);

    const kicksembed = new discord.MessageEmbed()
    .setColor('#add8e6')
    .setDescription(message.author.username + " just kicked " + member.user.username)
    .setImage(kick[pics], 0, 0, 1000, 800)

    if (member.user.username != message.author.username) return message.channel.send(kicksembed);   
        
    }
}