const mongoose = require('mongoose');
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}) 
const Devs = require('../../Structures/models/developers')
const { owners } = require('../../../config.json')
const Command = require('../../Structures/Command');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['removedevs', 'removedeveloper', 'removedevelopers'],
            description: 'Owner can only use it for Animatronix Developers',
            category: '<a:DiscordLOGOZ:792366989543866379>Developer',
            usage: '<userID>',
            ncat: 'Developer'
        });
    }

    async run(message, args) {
            if(message.author.id === owners){ 
            if(!args) return message.channel.send('You didn\'t send any userID to get blacklisted!')
            try{
                const member = await this.client.users.fetch(args[0]);
                const xid = member.id
                const developers = await Devs.findOne({
                    userID: xid
                })
                if(!developers) return message.channels.send('That userID is not a developer of Animatronix!');
                await Devs.findOneAndRemove({
                    userID: xid
                }).then(message.channel.send('The userID you have mention is now remove from the list of Developers in Animatronix!'))
            }
            catch(e){
                let lmaoz = message.client.channels.cache.find(ch => ch.id==="752363061503066132")
                message.channel.send('Error have been occured check the server logs!')
                lmaoz.send("Error Adding Developers:\n" + `\`\`\`${e}\`\`\``)
            }
        } else return message.channel.send('You are not the owner of Animatronix!');
    }

}