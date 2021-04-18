const Command = require('../../Structures/Command');
const discord = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['d', 'dances'],
            description: 'Send a gif dancing',
            category: '<:cute_reaction_like_kawaii:747999327569575967>Reacts',
            ncat: 'Reacts'
        });
    }

    async run(message) {
    var dance = [
        "https://media1.tenor.com/images/c925511d32350cc04411756d623ebad6/tenor.gif?itemid=13462237",
        "https://media1.tenor.com/images/9ee571803fdbea520d723280a6c2c573/tenor.gif?itemid=15054962",
        "https://media1.tenor.com/images/42803ed59f21b034f440243557ff2736/tenor.gif?itemid=11049076",
        "https://media1.tenor.com/images/766599022416cc0b7b7b1bd2040eb2db/tenor.gif?itemid=12039886",
        "https://media1.tenor.com/images/56350dfdcd3a5fa4fd66e9e87f9574bb/tenor.gif?itemid=4718162",
        "https://media1.tenor.com/images/dc24029de47091555c2ecd8ac91d2069/tenor.gif?itemid=13048072",
        "https://media1.tenor.com/images/0b39752a9e328237ce09af5f3c379b20/tenor.gif?itemid=12042399",
        "https://media1.tenor.com/images/2ba4b3c691dc6a4712ddf9eef7631ca0/tenor.gif?itemid=11984235",
        "https://media1.tenor.com/images/81c0b8d3c0617d2902319b7f67e6ce01/tenor.gif?itemid=7560551",
        "https://media1.tenor.com/images/2228d0356ff59ba87338ccc9cd3f867e/tenor.gif?itemid=11942970",
        "https://media1.tenor.com/images/1898f99ff4ce6348bb0738c28d2e2894/tenor.gif?itemid=14813413",
        "https://media1.tenor.com/images/8df28ac0b72e04b6f464759d909a160f/tenor.gif?itemid=15776666",
        "https://media1.tenor.com/images/a46ad100db83c0abb116d3855301c940/tenor.gif?itemid=4665031",
        "https://media1.tenor.com/images/b90ea7fb1f855630a41fb6542a52e345/tenor.gif?itemid=15405089",
        "https://media1.tenor.com/images/ebb868fd0a68bd973dbeb423eba0474f/tenor.gif?itemid=17134957",
        "https://media1.tenor.com/images/d85d9011c6c866057ca2e6780c6fedd8/tenor.gif?itemid=13266349",
        "https://media1.tenor.com/images/0a0c13d7a40f9aaaedae6e4731ee52b6/tenor.gif?itemid=17295058"
    ]
    var pics = Math.floor((Math.random() * dance.length))

    const danceembed = new discord.MessageEmbed()
    .setColor('#add8e6')
    .setDescription(message.author.username + " is dancing")
    .setImage(dance[pics])
    message.channel.send(danceembed);
    }
}