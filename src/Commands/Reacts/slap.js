const Command = require('../../Structures/Command');
const discord = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['s', 'slaps'],
            description: 'Send a gif slap to the user that is mentioned.',
            category: '<:cute_reaction_like_kawaii:747999327569575967>Reacts',
            usage: '<user>',
            ncat: 'Reacts'
        });
    }

    async run(message) {
    const member = message.mentions.members.first();
    var slap = [
        "https://media1.tenor.com/images/612e257ab87f30568a9449998d978a22/tenor.gif?itemid=16057834",
        "https://media1.tenor.com/images/74db8b0b64e8d539aebebfbb2094ae84/tenor.gif?itemid=15144612",
        "https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956",
        "https://media1.tenor.com/images/af36628688f5f50f297c5e4bce61a35c/tenor.gif?itemid=17314633",
        "https://media1.tenor.com/images/1ba1ea1786f0b03912b1c9138dac707c/tenor.gif?itemid=5738394",
        "https://media1.tenor.com/images/89309d227081132425e5931fbbd7f59b/tenor.gif?itemid=4880762",
        "https://media1.tenor.com/images/4fa82be21ffd18c99a9708ba209d56ad/tenor.gif?itemid=5318916",
        "https://media1.tenor.com/images/0a3e109296e16977a61ed28c1e5bf7bf/tenor.gif?itemid=5122897",
        "https://media1.tenor.com/images/85722c3e51d390e11a0493696f32fb69/tenor.gif?itemid=5463215",
        "https://media1.tenor.com/images/153b2f1bfd3c595c920ce60f1553c5f7/tenor.gif?itemid=10936993",
        "https://media1.tenor.com/images/a0ff9e6e3f65b921d63dfffeec0b94a0/tenor.gif?itemid=7202047",
        "https://media1.tenor.com/images/72c7403c95f4f888a4931a74dfaec17a/tenor.gif?itemid=17190309",
        "https://media1.tenor.com/images/416ce127ae441cff2825ce2b992df736/tenor.gif?itemid=17342897",
        "https://media1.tenor.com/images/7cd22e9a02e2826361ae52a2412dea14/tenor.gif?itemid=9955713",
        "https://media1.tenor.com/images/4ceedd1da542cccbc32a7a49e52ce6e6/tenor.gif?itemid=15826924",
        "https://media1.tenor.com/images/957b2c99238b9c65a4201d81fe86f909/tenor.gif?itemid=16522029",
        "https://media1.tenor.com/images/fb17a25b86d80e55ceb5153f08e79385/tenor.gif?itemid=7919028",
        "https://media1.tenor.com/images/fb17a25b86d80e55ceb5153f08e79385/tenor.gif?itemid=7919028",
        "https://media1.tenor.com/images/2277b29821fcef8324a73c839473edd5/tenor.gif?itemid=15778610"
    ]
    var pics = Math.floor((Math.random() * slap.length))

    const slapembed = new discord.MessageEmbed()
    .setColor('#add8e6')
    .setDescription("You can't slap yourself. Mention somebody else again.")

    const slapxsembed = new discord.MessageEmbed()
    .setColor('#add8e6')
    .setDescription("Who do you wanna slap? Mention someone again.")

    if (!member) return message.channel.send(slapxsembed);
    if (member.user.username == message.author.username) return message.channel.send(slapembed);

    const slapsembed = new discord.MessageEmbed()
    .setColor('#add8e6')
    .setDescription(message.author.username + " just slapped " + member.user.username)
    .setImage(slap[pics], 0, 0, 1000, 800)

    if (member.user.username != message.author.username) return message.channel.send(slapsembed);   
        
    }
}