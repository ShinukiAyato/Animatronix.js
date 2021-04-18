const Command = require('../../Structures/Command');
const mongoose = require('mongoose');
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const XBeta = require('../../Structures/models/beta')
const Devs = require('../../Structures/models/developers')


module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['addbetas'],
            description: 'For Developers Only',
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
        if(!args) return message.channel.send('You didn\'t send any userID to make them a Beta Tester!')
        try{
            const member = await this.client.users.fetch(args[0]);
            const xid = member.id
            const xbeta = await XBeta.findOne({
                userID: xid
            })
            if(xbeta) return message.channels.send('That username is already a Beta Tester!');
            XBeta.findOne({
                userID: xid
            }, (err, xbet) => {
                if(err) console.log(err);
                if(!xbet){
                    new XBeta({
                        userID: xid,
                    }).save().then(message.channel.send('The userID you have mention is now a Beta Tester!'));
                }
            })
        }
        catch(e){
            let lmaoz = message.client.channels.cache.find(ch => ch.id==="752363061503066132")
            message.channel.send('Error have been occured check the server logs!')
            lmaoz.send("Error Adding Beta Tester:\n" + `\`\`\`${e}\`\`\``)
        }
    }

}