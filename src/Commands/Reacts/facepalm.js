const Command = require('../../Structures/Command');
const discord = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['fp', 'facepalms'],
            description: 'Send a gif facepalm.',
            category: '<:cute_reaction_like_kawaii:747999327569575967>Reacts',
            ncat: 'Reacts'
        });
    }

    async run(message) {
    var fp = [
        "https://media1.tenor.com/images/9d30a11e7978ea3b404d5e48c5966c6b/tenor.gif?itemid=5015289",
        "https://media1.tenor.com/images/142d74bbd13fc305aed5a4894c0c3f7f/tenor.gif?itemid=16642818",
        "https://media1.tenor.com/images/76d2ec47ec76fa36b2fce913331ba7e3/tenor.gif?itemid=5533025",
        "https://media1.tenor.com/images/480cdeb59d3d5d50dd206283a944b8e1/tenor.gif?itemid=16327659",
        "https://media1.tenor.com/images/9a269d284388ae4906983f5dfbb15c64/tenor.gif?itemid=17106384",
        "https://media1.tenor.com/images/b8e234ac4aa6aa64b582895911de2046/tenor.gif?itemid=12411488",
        "https://media1.tenor.com/images/be96db9b9acfd04fd2f5d890e2c51781/tenor.gif?itemid=14355381",
        "https://media1.tenor.com/images/015b8063c7018c2880e88c6014a0ffaf/tenor.gif?itemid=12168336",
        "https://media1.tenor.com/images/1985087041eb8f0e86899c6e3aa36614/tenor.gif?itemid=16187738",
        "https://media1.tenor.com/images/5e29a1db9149211728b22bfd01f88771/tenor.gif?itemid=10336271",
        "https://media1.tenor.com/images/fce5aa9f4825a2adabfc9c91686167bc/tenor.gif?itemid=16842960",
        "https://media1.tenor.com/images/fce5aa9f4825a2adabfc9c91686167bc/tenor.gif?itemid=16842960",
        "https://media1.tenor.com/images/04ce28c62c8cfeb102b3ac2a9bf28050/tenor.gif?itemid=12411417"
    ]
    var pics = Math.floor((Math.random() * fp.length))

    const fpembed = new discord.MessageEmbed()
    .setColor('#add8e6')
    .setDescription(`"urhhhh" -` + message.author.username)
    .setImage(fp[pics])
    message.channel.send(fpembed);
    }
}