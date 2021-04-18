const Command = require('../../Structures/Command');
const mongoose = require('mongoose');
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
const Profile = require('../../Structures/models/profile')
const Money = require('../../Structures/models/currency')  
const XP = require('../../Structures/models/xp')  
const Inventory = require('../../Structures/models/inventory')
const Work = require('../../Structures/models/work')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['reborn', 'rebirths'],
            description: 'Restart your account but have some titles and other privileges.',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            cooldowns: "1 minute",
            cd: 60,
        });
    }

    async run(message) {
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        if(profile){
            if(profile.titles.includes("Rebirth V")){
                message.channel.send(`You have aquired Immortality and cannot do rebirth.`)
            } else {
                if(profile.nrank === "None"){
                    message.channel.send('Are you sure about doing this? If you do this your account will be restart but will give titles and other privileges (y/n)')
                    try {
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                        if((msgs.first().content.toLowerCase())=="y"){
                            message.channel.send('What cultivation do you want? (Physical/Spiritual)')
                            try {
                                let msgs1 = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                                if((msgs1.first().content.toLowerCase())=="spiritual"){
                                    await Money.findOneAndUpdate({
                                        userID: message.author.id
                                    }, {
                                            sstone: 0
                                    })
                                    await Profile.findOneAndUpdate({
                                        userID: message.author.id
                                    }, {
                                        inventory: 0,
                                        class: 'Spiritual Cultivator',
                                        rank: 'None',
                                        nrank: 'Qi Gathering',
                                        occupation: 'None',
                                    })
                                    await XP.findOneAndUpdate({
                                        userID: message.author.id
                                    }, {
                                        xp: 0
                                    })
                                    await Inventory.findOneAndUpdate({
                                        userID: message.author.id
                                    }, {
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
                                    })
                                    await Work.findOneAndRemove({
                                        userID: message.author.id
                                    })
                                    message.channel.send('Congratulation you have been reborn.')
                                    if(profile.titles.includes("None")) return rebirthI();
                                    if(!profile.titles.includes("None")){
                                        if(!profile.titles.includes("Rebirth I")) {
                                            if(profile.titles.includes("Rebirth II")) return;
                                            else if(profile.titles.includes("Rebirth III")) return;
                                            else if(profile.titles.includes("Rebirth IV")) return;
                                            srebirthI();
                                        }
    
                                        else if(profile.titles.includes("Rebirth I")) return rebirthII();
    
                                        else if(profile.titles.includes("Rebirth II")) return rebirthIII();
    
                                        else if(profile.titles.includes("Rebirth III")) return rebirthIV();
    
                                        else if(profile.titles.includes("Rebirth IV")) return rebirthV();
                                    }
                                } else if((msgs1.first().content.toLowerCase())=="physical") {
                                    await Money.findOneAndUpdate({
                                        userID: message.author.id
                                    }, {
                                            sstone: 0
                                    })
                                    await Profile.findOneAndUpdate({
                                        userID: message.author.id
                                    }, {
                                        inventory: 0,
                                        class: 'Physical Cultivator',
                                        rank: 'None',
                                        nrank: 'Qi Gathering',
                                        occupation: 'None'
                                    })
                                    await XP.findOneAndUpdate({
                                        userID: message.author.id
                                    }, {
                                        xp: 0
                                    })
                                    await Inventory.findOneAndUpdate({
                                        userID: message.author.id
                                    }, {
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
                                    })
                                    await Work.findOneAndRemove({
                                        userID: message.author.id
                                    })
                                    message.channel.send('Congratulation you have been rebirth.')
                                    if(profile.titles.includes("None")) return rebirthI();
                                    if(!profile.titles.includes("None")){
                                        if(!profile.titles.includes("Rebirth I")) {
                                            if(profile.titles.includes("Rebirth II")) return;
                                            else if(profile.titles.includes("Rebirth III")) return;
                                            else if(profile.titles.includes("Rebirth IV")) return;
                                            srebirthI();
                                        }
    
                                        else if(profile.titles.includes("Rebirth I")) return rebirthII();
    
                                        else if(profile.titles.includes("Rebirth II")) return rebirthIII();
    
                                        else if(profile.titles.includes("Rebirth III")) return rebirthIV();
    
                                        else if(profile.titles.includes("Rebirth IV")) return rebirthV();
                                    }
                                } else {
                                    message.channel.send(`You didn't choose among the choices canceling the command.`)
                                }
                            }catch(e){
                                return message.channel.send(`You didn't choose in time canceling the command.`)
                            }
                        } else if((msgs.first().content.toLowerCase())=="n") {
                            message.channel.send('Cancelling the command.')
                        } else {
                            message.channel.send(`You didn't choose among the choices canceling the command.`)
                        }
                    }catch(e){
                        return message.channel.send(`You didn't choose in time canceling the command.`)
                    }
                } else {
                    message.channel.send(`You are not yet able to rebirth.`)
                }
            }
        }
        if(!profile) {
            message.channel.send(`You don't have a profile created yet.`)
        }
        async function srebirthI() {
            await Profile.findOneAndUpdate({
                userID: message.author.id
            }, {
                $addToSet: {
                    titles: "Rebirth I"
                }
            })
        }
        async function rebirthI() {
            await Profile.findOneAndUpdate({
                userID: message.author.id
            }, {
                $addToSet: {
                    titles: "Rebirth I"
                }
            })
            await Profile.findOneAndUpdate({
                userID: message.author.id
            }, {
                $pull: {
                    titles: "None"
                }
            })
        }
        async function rebirthII() {
            await Profile.findOneAndUpdate({
                userID: message.author.id
            }, {
                $addToSet: {
                    titles: "Rebirth II"
                }
            })
            await Profile.findOneAndUpdate({
                userID: message.author.id
            }, {
                $pull: {
                    titles: "Rebirth I"
                }
            })
        }
        async function rebirthIII() {
            await Profile.findOneAndUpdate({
                userID: message.author.id
            }, {
                $addToSet: {
                    titles: "Rebirth III"
                }
            })
            await Profile.findOneAndUpdate({
                userID: message.author.id
            }, {
                $pull: {
                    titles: "Rebirth II"
                }
            })
        }
        async function rebirthIV() {
            await Profile.findOneAndUpdate({
                userID: message.author.id
            }, {
                $addToSet: {
                    titles: "Rebirth IV"
                }
            })
            await Profile.findOneAndUpdate({
                userID: message.author.id
            }, {
                $pull: {
                    titles: "Rebirth III"
                }
            })
        }
        async function rebirthV() {
            await Profile.findOneAndUpdate({
                userID: message.author.id
            }, {
                $addToSet: {
                    titles: "Rebirth V"
                }
            })
            await Profile.findOneAndUpdate({
                userID: message.author.id
            }, {
                $pull: {
                    titles: "Rebirth IV"
                }
            })
        }
    }
}