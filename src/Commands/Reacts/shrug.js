const Command = require('../../Structures/Command');
const discord = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['sh', 'shrugs', 'idk'],
            description: 'Send a gif shrug.',
            category: '<:cute_reaction_like_kawaii:747999327569575967>Reacts',
            ncat: 'Reacts'
        });
    }

    async run(message) {
    var shrug = [
        "https://media1.tenor.com/images/8bf3267e5f0a00eef84f9fbb6ac4ac1b/tenor.gif?itemid=13119038",
        "https://media1.tenor.com/images/dbe1ca7fdb532cf96a9bea40fa1f406e/tenor.gif?itemid=9724581",
        "https://media1.tenor.com/images/94898cd48980cfc4128622300a9ba746/tenor.gif?itemid=14913933",
        "https://media1.tenor.com/images/ff9daac04b5682278ce656b85c166c68/tenor.gif?itemid=14625512",
        "https://media1.tenor.com/images/ff9daac04b5682278ce656b85c166c68/tenor.gif?itemid=14625512",
        "https://media1.tenor.com/images/92c10b7c4905d7d475ccf8e5816aff07/tenor.gif?itemid=5265736",
        "https://media1.tenor.com/images/62fb4a540cffdb3605201a31c428a0e4/tenor.gif?itemid=12286564",
        "https://media1.tenor.com/images/92ebc027574ba12dcb1c620eb5386f72/tenor.gif?itemid=16049226",
        "https://media1.tenor.com/images/053a9ece4298fbb81f0ae5406e5fc2e3/tenor.gif?itemid=12787691",
        "https://media1.tenor.com/images/053a9ece4298fbb81f0ae5406e5fc2e3/tenor.gif?itemid=12787691",
        "https://media1.tenor.com/images/07ad4dff1580660dd009f041cdeac7be/tenor.gif?itemid=10759884",
        "https://media1.tenor.com/images/84da3f9ed9384f0237713dc5dc10c3aa/tenor.gif?itemid=15845789",
        "https://media1.tenor.com/images/d17cfe1c74591f489c911f928b818b5b/tenor.gif?itemid=17522329",
        "https://media1.tenor.com/images/2c0a69a41a8891ed9e6c95bf246288f2/tenor.gif?itemid=15753577",
        "https://media1.tenor.com/images/2c0a69a41a8891ed9e6c95bf246288f2/tenor.gif?itemid=15753577",
        "https://media1.tenor.com/images/2c0a69a41a8891ed9e6c95bf246288f2/tenor.gif?itemid=15753577",
    ]
    var pics = Math.floor((Math.random() * shrug.length))

    const shrugembed = new discord.MessageEmbed()
    .setColor('#add8e6')
    .setDescription(`"I don't know" -` + message.author.username)
    .setImage(shrug[pics])
    message.channel.send(shrugembed);
    }
}