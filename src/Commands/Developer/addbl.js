const mongoose = require('mongoose');
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const Blacklist = require('../../Structures/models/blacklist') 
const Devs = require('../../Structures/models/developers')
const Command = require('../../Structures/Command');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['addblacklist', 'addbls', 'removewl', 'removewhitelist'],
            description: 'Add mention id to blacklist of Animatronix',
            category: '<a:DiscordLOGOZ:792366989543866379>Developer',
            usage: '<userID>',
            ncat: 'Developer'
        });
    }

    async run(message, args) {
        const developers = await Devs.findOne({
            userID: message.author.id
        })
        if(!developers) return message.channel.send('You are not one of the Developers of Animatronix!');
        if(!args) return message.channel.send('You didn\'t send any userID to get blacklisted!')
        try{
            const member = await this.client.users.fetch(args[0]);
            const xid = member.id
            const blacklist = await Blacklist.findOne({
                userID: xid
            })
            if(blacklist) return message.channels.send('That username is already blacklisted!');
            Blacklist.findOne({
                userID: xid
            }, (err, bl) => {
                if(err) console.log(err);
                if(!bl){
                    new Blacklist({
                        userID: xid,
                    }).save().then(message.channel.send('The userID you have mention is now blacklisted!'));
                }
            })
        }
        catch(e){
            let lmaoz = message.client.channels.cache.find(ch => ch.id==="752363061503066132")
            message.channel.send('Error have been occured check the server logs!')
            lmaoz.send("Error Adding Blacklisting:\n" + `\`\`\`${e}\`\`\``)
        }
    }

}