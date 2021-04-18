const Command = require('../../Structures/Command');
const mongoose = require('mongoose');
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const Profile = require('../../Structures/models/profile')
const Money = require('../../Structures/models/currency')  
const XP = require('../../Structures/models/xp')  
const Inventory = require('../../Structures/models/inventory')  
const XBeta = require('../../Structures/models/beta')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['createprofile'],
            description: 'Create your account.',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            cooldowns: "1 minute",
            cd: 60
        });
    }

    async run(message) {
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        const xbeta = await XBeta.findOne({
            userID: message.author.id
        })
        if(!xbeta) return message.channel.send('You are not a beta Tester! Try joining the official server of anima if you wanna apply as a beta tester.')
        if(profile){
            message.channel.send('You already have a profile created!')
        } 
        if(!profile) {
            message.channel.send('What cultivation do you want? (Physical/Spiritual)')
            try {
                let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                if((msgs.first().content.toLowerCase())=="spiritual"){
                    Money.findOne({
                        userID: message.author.id
                    }, (err, bal) => {
                        if(err) console.log(err);
                        if(!bal){
                            new Money({
                                userID: message.author.id,
                                sstone: 0,
                            }).save().catch(err => console.log(err));
                        }
                    })
                    Profile.findOne({
                        userID: message.author.id
                    }, (err, prof) => {
                        if(err) console.log(err);
                        if(!prof){
                            new Profile({
                                userID: message.author.id,
                                inventory: 0,
                                class: 'Spiritual Cultivator',
                                rank: 'None',
                                nrank: 'Qi Gathering',
                                occupation: 'None',
                                titles: [
                                    'None'
                                ],
                                sect: 'Coming Soon'
                            }).save().catch(err => console.log(err));
                        }
                    })
                    XP.findOne({
                        userID: message.author.id
                    }, (err, xp) => {
                        if(err) console.log(err);
                        if(!xp){
                            new XP({
                                userID: message.author.id,
                                xp: 0
                            }).save().catch(err => console.log(err));
                        }
                    })
                    Inventory.findOne({
                        userID: message.author.id
                    }, (err, inv) => {
                        if(err) console.log(err);
                        if(!inv){
                            new Inventory({
                                userID: message.author.id,
                                low: 0,
                                middle: 0,
                                high: 0,
                                superior: 0,
                                transcendent: 0,
                                violet: 0,
                                void: 0,
                                vast: 0,
                                rested: 0,
                                whole: 0,
                                cauldron: 0,
                                rideable: 0,
                                brush: 0,
                                treasure: 0,
                                seal: 0,
                                spirit: 0,
                                talisman: 0,
                                demonic: 0,
                                pickaxe: 0,
                                box: 0,
                                raid: 0,
                                event: 0,
                            }).save().catch(err => console.log(err));
                        }
                    })
                    message.channel.send('Your profile have been created.')
                } else if((msgs.first().content.toLowerCase())=="physical") {
                    Money.findOne({
                        userID: message.author.id
                    }, (err, bal) => {
                        if(err) console.log(err);
                        if(!bal){
                            new Money({
                                userID: message.author.id,
                                sstone: 0,
                            }).save().catch(err => console.log(err));
                        }
                    })
                    Profile.findOne({
                        userID: message.author.id
                    }, (err, prof) => {
                        if(err) console.log(err);
                        if(!prof){
                            new Profile({
                                userID: message.author.id,
                                inventory: 0,
                                class: 'Physical Cultivator',
                                rank: 'None',
                                nrank: 'Mortal Flesh',
                                occupation: 'None',
                                titles: [
                                    'None'
                                ],
                                sect: 'Coming Soon'
                            }).save().catch(err => console.log(err));
                        }
                    })
                    XP.findOne({
                        userID: message.author.id
                    }, (err, xp) => {
                        if(err) console.log(err);
                        if(!xp){
                            new XP({
                                userID: message.author.id,
                                xp: 0
                            }).save().catch(err => console.log(err));
                        }
                    })
                    Inventory.findOne({
                        userID: message.author.id
                    }, (err, inv) => {
                        if(err) console.log(err);
                        if(!inv){
                            new Inventory({
                                userID: message.author.id,
                                userID: message.author.id,
                                low: 0,
                                middle: 0,
                                high: 0,
                                superior: 0,
                                transcendent: 0,
                                violet: 0,
                                void: 0,
                                vast: 0,
                                rested: 0,
                                whole: 0,
                                cauldron: 0,
                                rideable: 0,
                                brush: 0,
                                treasure: 0,
                                seal: 0,
                                spirit: 0,
                                talisman: 0,
                                demonic: 0,
                                pickaxe: 0,
                                box: 0,
                                raid: 0,
                                event: 0,
                            }).save().catch(err => console.log(err));
                        }
                    })
                    message.channel.send('Your profile have been created.')
                } else {
                    message.channel.send(`You didn't choose among the choices canceling the command.`)
                }
            }catch(e){
                return message.channel.send(`You didn't choose in time canceling the command.`)
            }
        }
    }
};
