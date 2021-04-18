const Command = require('../../Structures/Command');
const discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['m', 'memes'],
            description: 'Send a anime meme.',
            category: '<:dub_with_the_ohhhhhh:747996705814741042>Fun',
            ncat: 'Fun'
        });
    }

    async run(message) {
        let reddit = [
            "animememes",
            "HistoryAnimemes",
            "Animemes",
            "AnimeFunny",
            "DnDAnimemes"
        ]
        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
        
        randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'memes.png'
                }]
            })
        }).catch(err => console.error(err));
    }

}