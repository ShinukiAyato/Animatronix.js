const Command = require('../../Structures/Command');
const discord = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['rockpaperscissors'],
            description: 'Play a game with the bot Rock/Paper/Scissors',
            category: '🎮Games',
            usage: '<rock/paper/scissors>',
            ncat: 'Games'
        });
    }

    async run(message, args) {
        var rps = ["rock", "paper", "scissors"];
        let i;
        let rpsx = rps[Math.floor(Math.random() * rps.length)];
        if(!rps.includes(args[0])) return message.reply("Please choose rock, paper or scissor.");
        if(args[0].includes("rock")) {
            if(rpsx === "rock") {
                return message.channel.send(`You chose **${args[0]}** and I chose **${rpsx}** and it is a tie, wanna try again?`); 
            }
            if(rpsx === "paper") {
                return message.channel.send(`You chose **${args[0]}** and I chose **${rpsx}** and I won! Well played. UwU`);
            }
            if(rpsx === "scissors") {
                return message.channel.send(`You chose **${args[0]}** and I chose **${rpsx}** and I lost! Congrats on winning! UwU`);
            }
        }
        if(args[0].includes("paper")) {
            if(rpsx === "paper") {
                return message.channel.send(`You chose **${args[0]}** and I chose **${rpsx}** and it is a tie, wanna try again?`); 
            }
            if(rpsx === "scissors") {
                return message.channel.send(`You chose **${args[0]}** and I chose **${rpsx}** and I won! Well played. UwU`);
            }
            if(rpsx === "rock") {
                return message.channel.send(`You chose **${args[0]}** and I chose **${rpsx}** and I lost! Congrats on winning! UwU`);
            }
        }
        if(args[0].includes("scissors")) {
            if(rpsx === "scissors") {
                return message.channel.send(`You chose **${args[0]}** and I chose **${rpsx}** and it is a tie, wanna try again?`); 
            }
            if(rpsx === "rock") {
                return message.channel.send(`You chose **${args[0]}** and I chose **${rpsx}** and I won! Well played. UwU`);
            }
            if(rpsx === "paper") {
                return message.channel.send(`You chose **${args[0]}** and I chose **${rpsx}** and I lost! Congrats on winning! UwU`);
            }
        }
    }

}