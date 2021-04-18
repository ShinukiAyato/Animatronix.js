const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js')
const mongoose = require('mongoose');
const xwork = require('../../Structures/models/works.json')
const shuffle = require('shuffle-words')
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const Money = require('../../Structures/models/currency') 
const Profile = require('../../Structures/models/profile') 
const Inventory = require('../../Structures/models/inventory')
const Work = require('../../Structures/models/work')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['works'],
            description: 'Do your work/ apply work / and see list of works.',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            usage: "[list/alchemist/taoism/spirithunt/hunter/miner/laborer]",
            cooldowns: "1 hour",
            cd: 3600,
        });
    }

    async run(message, args) {
        const balance = await Money.findOne({
            userID: message.author.id
        })
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        const inventory = await Inventory.findOne({
            userID: message.author.id
        })
        const work = await Work.findOne({
            userID: message.author.id
        })
        if(profile){
            if(args[0] === "list"){
                    const embed = new MessageEmbed()
                    .setDescription('Description about work if you have failed your work 4 times you might get kicked out of your worked and your salary will restart. If you work hard enough you might get a salary increase. Pick a work <hunter/alchemist/taoism/ghosthunt/laborer>. For the other works that needs a specific item if you apply on that specific work the items will be used and will be removed from your inventory. Maybe because the dev is a bit sadistic. To apply at work do `tc!work <hunter/spirithunt/alchemist/taoism/laborer/miner>`')
                    .addField("**Work List**:", [
                        "*Hunter*\nNeeds: `Rideable Flying Sword`\n",
                        "*Alchemist*\nNeeds: `Pill Refining Cauldron`\n",
                        "*Taoism*\nNeeds: `Infuse Qi Brush`\n",
                        "*SpiritHunt*\nNeeds: `Devouring Seal of the Spirits`\n",
                        "*Miner*\nNeeds: `Holy Relic Pickaxe`\n",
                        "*Laborer*\nNeeds: `2000 Spirit Stones`"
                    ])
                    .setColor('#d4f2b6')
                    .setFooter('Don\'t Forget to Vote.');
                    message.channel.send(embed)
            } else if(args[0] === "alchemist"){
                    if(profile.occupation !== "None") return message.channel.send(`You are currently working on ${profile.occupation}`)
                    if(inventory.cauldron == 0) return message.channel.send('You don\'t have a Pill Refining Cauldron please buy 1.');
                    if(inventory.cauldron > 0){
                        Work.findOne({
                            userID: message.author.id
                        }, (err, work) => {
                            if(err) console.log(err);
                            if(!work){
                                new Work({
                                    userID: message.author.id,
                                    Occupation: "alchemist",
                                    fail: 0,
                                    success: 0,
                                    salary: 4000
                                }).save().catch(err => console.log(err));
                            }
                        })
                        inventory.cauldron -= 1;
                        inventory.save();
                        profile.inventory -= 1
                        profile.occupation = "Alchemist";
                        profile.save();
                    }
                    message.channel.send('You have successfully applied to the job. You are now an Alchemist')
            } else if(args[0] === "taoism"){
                    if(profile.occupation !== "None") return message.channel.send(`You are currently working on ${profile.occupation}`)
                    if(inventory.brush == 0) return message.channel.send('You don\'t have a Infuse Qi Brush please buy 1.');
                    if(inventory.brush > 0){
                        Work.findOne({
                            userID: message.author.id
                        }, (err, work) => {
                            if(err) console.log(err);
                            if(!work){
                                new Work({
                                    userID: message.author.id,
                                    Occupation: "taoism",
                                    fail: 0,
                                    success: 0,
                                    salary: 3000
                                }).save().catch(err => console.log(err));
                            }
                        })
                        inventory.brush -= 1;
                        inventory.save()
                        profile.inventory -= 1;
                        profile.occupation = "Taoism";
                        profile.save();
                    }
                    message.channel.send('You have successfully applied to the job. You work on Taoism now.')
            } else if(args[0] === "hunter"){
                    if(profile.occupation !== "None") return message.channel.send(`You are currently working on ${profile.occupation}`);
                    if(inventory.rideable == 0) return message.channel.send('You don\'t have a Rideable Flying Sword please buy 1.');
                    if(inventory.rideable > 0){
                        Work.findOne({
                            userID: message.author.id
                        }, (err, work) => {
                            if(err) console.log(err);
                            if(!work){
                                new Work({
                                    userID: message.author.id,
                                    Occupation: "hunter",
                                    fail: 0,
                                    success: 0,
                                    salary: 6000
                                }).save().catch(err => console.log(err));
                            }
                        })
                        inventory.rideable -= 1;
                        inventory.save();
                        profile.inventory -= 1
                        profile.occupation = "Hunter";
                        profile.save();
                    }
                    message.channel.send('You have successfully applied to the job. You are now a Hunter')
            } else if(args[0] === "laborer"){
                    if(profile.occupation !== "None") return message.channel.send(`You are currently working on ${profile.occupation}`)
                    if(balance.sstone < 2000) return message.channel.send('You don\'t have a 1500 Spirit Stones.');
                    if(balance.sstone >= 2000){
                        Work.findOne({
                            userID: message.author.id
                        }, (err, work) => {
                            if(err) console.log(err);
                            if(!work){
                                new Work({
                                    userID: message.author.id,
                                    Occupation: "laborer",
                                    fail: 0,
                                    success: 0,
                                    salary: 500
                                }).save().catch(err => console.log(err));
                            }
                        })
                        balance.sstone -= 2000;
                        inventory.save();
                        profile.occupation = "Laborer";
                        profile.save();
                    }
                    message.channel.send('You have successfully applied to the job. You are now a Laborer')
            } else if(args[0] === "miner"){
                    if(profile.occupation !== "None") return message.channel.send(`You are currently working on ${profile.occupation}`)
                    if(inventory.pickaxe == 0) return message.channel.send('You don\'t have a Holy Relic Pickaxe please buy 1.');
                    if(inventory.pickaxe > 0){
                        Work.findOne({
                            userID: message.author.id
                        }, (err, work) => {
                            if(err) console.log(err);
                            if(!work){
                                new Work({
                                    userID: message.author.id,
                                    Occupation: "miner",
                                    fail: 0,
                                    success: 0,
                                    salary: 2000
                                }).save().catch(err => console.log(err));
                            }
                        })
                        inventory.pickaxe -= 1;
                        inventory.save();
                        profile.inventory -= 1
                        profile.occupation = "Miner";
                        profile.save();
                    }
                    message.channel.send('You have successfully applied to the job. You are now a Miner')
            } else if(args[0] === "spirithunt"){
                    if(profile.occupation !== "None") return message.channel.send(`You are currently working on ${profile.occupation}`)
                    if(inventory.seal == 0) return message.channel.send('You don\'t have a Devouring Seal of the Spirits please buy 1.');
                    if(inventory.seal > 0){
                        Work.findOne({
                            userID: message.author.id
                        }, (err, work) => {
                            if(err) console.log(err);
                            if(!work){
                                new Work({
                                    userID: message.author.id,
                                    Occupation: "spirithunt",
                                    fail: 0,
                                    success: 0,
                                    salary: 9000
                                }).save().catch(err => console.log(err));
                            }
                        })
                        inventory.seal -= 1;
                        inventory.save();
                        profile.inventory -= 1
                        profile.occupation = "Spirit Hunter";
                        profile.save();
                    }
                    message.channel.send('You have successfully applied to the job. You are now a Spirit Hunter')
            } else if(!args[0]){
                if(profile.occupation === "None"){
                        message.channel.send(`You are didn't apply to any work yet. Do \`tc!work list\``)
                } 
                if(profile.occupation === "None") return;
                const numx = Math.floor(Math.random() * 500) + work.salary
                const rates = Math.floor(Math.random() * 100)
                const extrax = Math.floor(Math.random() * 100)
                if(work.Occupation === "alchemist"){
                    const swork = xwork.alchemist[Math.floor(Math.random() * xwork.alchemist.length)]
                    const wembed = new MessageEmbed()
                    .setTitle('Work for Alchemist')
                    .setDescription(`You need to unscammble and find the original word. You only have 1 try\n\`${shuffle(swork, true)}\``)
                    .setColor('#00FF00')
                    message.channel.send(wembed)
                    try {
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                        if((msgs.first().content.toLowerCase()) == swork.toLowerCase()){
                            message.channel.send(`Well done ${message.author.username}. You've been payed ${numx} spirit stones.`)
                            if(work.success >= 10){
                                if(rates > 60){
                                    message.channel.send('You have been promoted because of your hard work. Now your salary has increase.')
                                    work.success = 0
                                    work.salary += 1000;
                                }
                            }
                            balance.sstone += Number(numx);
                            balance.save()
                            work.success += 1;
                            work.save();
                            if(extrax >= 85){
                                message.channel.send('While working you have made an extra Demonic Pill that you can sell/use.')
                                profile.inventory += 1;
                                profile.save();
                                inventory.demonic += 1;
                                inventory.save();
                            }
                        } else {
                            if(work.fail >= 6){
                                if(rates > 45){
                                    message.channel.send(`The boss had it enough of your mistake. The boss kicked you out of the your work.`)
                                    work.deleteOne();
                                    profile.occupation = "None";
                                    profile.save();
                                } else {
                                    message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                    work.fail += 1;
                                    work.save();
                                }
                            } else {
                                message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                work.fail += 1;
                                work.save();
                            }
                        }
                    }catch(e){
                        message.channel.send(`You didn't answer in time! You didn't get payed.`)
                        work.fail += 1;
                        work.save();
                    }
                }
                if(work.Occupation === "taoism"){
                        const swork = xwork.taoism[Math.floor(Math.random() * xwork.taoism.length)]
                        const wembed = new MessageEmbed()
                        .setTitle('Work for Taoism')
                        .setDescription(`You need to unscammble and find the original word. You only have 1 try\n\`${shuffle(swork, true)}\``)
                        .setColor('#00FF00')
                        message.channel.send(wembed)
                        try {
                            let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                            if((msgs.first().content.toLowerCase()) == swork.toLowerCase()){
                                message.channel.send(`Well done ${message.author.username}. You've been payed ${numx} spirit stones.`)
                                if(work.success >= 10){
                                    if(rates > 60){
                                        message.channel.send('You have been promoted because of your hard work. Now your salary has increase.')
                                        work.success = 0
                                        work.salary += 1000;
                                    }
                                }
                                balance.sstone += Number(numx);
                                balance.save()
                                work.success += 1;
                                work.save();
                                if(extrax >= 85){
                                    message.channel.send('While working you have made an extra Talisman that you can sell/use.')
                                    profile.inventory += 1;
                                    profile.save();
                                    inventory.talisman += 1;
                                    inventory.save();
                                }
                            } else {
                                if(work.fail >= 6){
                                    if(rates > 45){
                                        message.channel.send(`The boss had it enough of your mistake. The boss kicked you out of the your work.`)
                                        work.deleteOne();
                                        profile.occupation = "None";
                                        profile.save();
                                    } else {
                                        message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                        work.fail += 1;
                                        work.save();
                                    }
                                } else {
                                    message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                    work.fail += 1;
                                    work.save();
                                }
                            }
                        }catch(e){
                            message.channel.send(`You didn't answer in time! You didn't get payed.`)
                            work.fail += 1;
                            work.save();
                        }
                }
                if(work.Occupation === "hunter"){
                        const swork = xwork.hunter[Math.floor(Math.random() * xwork.hunter.length)]
                        const wembed = new MessageEmbed()
                        .setTitle('Work for Hunter')
                        .setDescription(`You need to unscammble and find the original word. You only have 1 try\n\`${shuffle(swork, true)}\``)
                        .setColor('#00FF00')
                        message.channel.send(wembed)
                        try {
                            let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                            if((msgs.first().content.toLowerCase()) == swork.toLowerCase()){
                                message.channel.send(`Well done ${message.author.username}. You've been payed ${numx} spirit stones.`)
                                if(work.success >= 10){
                                    if(rates > 60){
                                        message.channel.send('You have been promoted because of your hard work. Now your salary has increase.')
                                        work.success = 0
                                        work.salary += 1000;
                                    }
                                }
                                balance.sstone += Number(numx);
                                balance.save()
                                work.success += 1;
                                work.save();
                                if(extrax >= 85){
                                    message.channel.send('While hunting you saw a Treasure that you can sell/use.')
                                    profile.inventory += 1;
                                    profile.save();
                                    inventory.treausure += 1;
                                    inventory.save();
                                }
                            } else {
                                if(work.fail >= 6){
                                    if(rates > 45){
                                        message.channel.send(`The boss had it enough of your mistake. The boss kicked you out of the your work.`)
                                        work.deleteOne();
                                        profile.occupation = "None";
                                        profile.save();
                                    } else {
                                        message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                        work.fail += 1;
                                        work.save();
                                    }
                                } else {
                                    message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                    work.fail += 1;
                                    work.save();
                                }
                            }
                        }catch(e){
                            message.channel.send(`You didn't answer in time! You didn't get payed.`)
                            work.fail += 1;
                            work.save();
                        }
                }
                if(work.Occupation === "laborer"){
                        const swork = xwork.laborer[Math.floor(Math.random() * xwork.laborer.length)]
                        const wembed = new MessageEmbed()
                        .setTitle('Work for Laborer')
                        .setDescription(`You need to unscammble and find the original word. You only have 1 try\n\`${shuffle(swork, true)}\``)
                        .setColor('#00FF00')
                        message.channel.send(wembed)
                        try {
                            let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                            if((msgs.first().content.toLowerCase()) == swork.toLowerCase()){
                                message.channel.send(`Well done ${message.author.username}. You've been payed ${numx} spirit stones.`)
                                if(work.success >= 10){
                                    if(rates > 60){
                                        message.channel.send('You have been promoted because of your hard work. Now your salary has increase.')
                                        work.success = 0
                                        work.salary += 1000;
                                    }
                                }
                                balance.sstone += Number(numx);
                                balance.save()
                                work.success += 1;
                                work.save();
                            } else {
                                if(work.fail >= 6){
                                    if(rates > 45){
                                        message.channel.send(`The boss had it enough of your mistake. The boss kicked you out of the your work.`)
                                        work.deleteOne();
                                        profile.occupation = "None";
                                        profile.save();
                                    } else {
                                        message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                        work.fail += 1;
                                        work.save();
                                    }
                                } else {
                                    message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                    work.fail += 1;
                                    work.save();
                                }
                            }
                        }catch(e){
                            message.channel.send(`You didn't answer in time! You didn't get payed.`)
                            work.fail += 1;
                            work.save();
                        }
                }
                if(work.Occupation === "miner"){
    
                        const swork = Math.floor(Math.random() * 100)
                        const wembed = new MessageEmbed()
                        .setTitle('Work for Miner')
                        .setDescription(`Where will you mine?\n\`holy cave\`  \`sacred cave\`  \`ancienct cave\`   \`forbidden cave\`  \`haunted cave\``)
                        .setColor('#00FF00')
                        message.channel.send(wembed)
                        try {
                            let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                            if((msgs.first().content.toLowerCase()) == "holy cave"){
                                if(swork > 20){
                                    if(extrax > 80){
                                        message.channel.send('While you were mine in the dark cave you saw something shiny and followed the light and found a Treasure that you can sell/use.')
                                        profile.inventory += 1;
                                        profile.save();
                                        inventory.treausure += 1;
                                        inventory.save();
                                    }
                                    if(work.success >= 10){
                                        if(rates > 60){
                                            message.channel.send('You have been promoted because of your hard work. Now your salary has increase.')
                                            work.success = 0
                                            work.salary += 1000;
                                        }
                                    }
                                    message.channel.send(`Well done ${message.author.username}. You've been payed ${numx} spirit stones.`)
                                    work.success = 0
                                    work.salary += 1000;
                                } else {
                                    if(work.fail >= 6){
                                        if(rates > 45){
                                            message.channel.send(`The boss had it enough of your mistake. The boss kicked you out of the your work.`)
                                            work.deleteOne();
                                            profile.occupation = "None";
                                            profile.save();
                                        } else {
                                            message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                            work.fail += 1;
                                            work.save();
                                        }
                                    } else {
                                        message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                        work.fail += 1;
                                        work.save();
                                    }
                                } 
                            } else if((msgs.first().content.toLowerCase()) == "sacred cave") {
                                if(swork > 40){
                                    if(extrax > 60){
                                        message.channel.send('While you were mine in the dark cave you saw something shiny and followed the light and found a Treasure that you can sell/use.')
                                        profile.inventory += 1;
                                        profile.save();
                                        inventory.treausure += 1;
                                        inventory.save();
                                    }
                                    if(work.success >= 10){
                                        if(rates > 60){
                                            message.channel.send('You have been promoted because of your hard work. Now your salary has increase.')
                                            work.success = 0
                                            work.salary += 1000;
                                        }
                                    }
                                    message.channel.send(`Well done ${message.author.username}. You've been payed ${numx} spirit stones.`)
                                    work.success = 0
                                    work.salary += 1000;
                                } else {
                                    if(work.fail >= 6){
                                        if(rates > 45){
                                            message.channel.send(`The boss had it enough of your mistake. The boss kicked you out of the your work.`)
                                            work.deleteOne();
                                            profile.occupation = "None";
                                            profile.save();
                                        } else {
                                            message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                            work.fail += 1;
                                            work.save();
                                        }
                                    } else {
                                        message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                        work.fail += 1;
                                        work.save();
                                    }
                                } 
                            } else if((msgs.first().content.toLowerCase()) == "ancient cave") {
                                if(swork > 60){
                                    if(extrax > 40){
                                        message.channel.send('While you were mine in the dark cave you saw something shiny and followed the light and found a Treasure that you can sell/use.')
                                        profile.inventory += 1;
                                        profile.save();
                                        inventory.treausure += 1;
                                        inventory.save();
                                    }
                                    if(work.success >= 10){
                                        if(rates > 60){
                                            message.channel.send('You have been promoted because of your hard work. Now your salary has increase.')
                                            work.success = 0
                                            work.salary += 1000;
                                        }
                                    }
                                    message.channel.send(`Well done ${message.author.username}. You've been payed ${numx} spirit stones.`)
                                    work.success = 0
                                    work.salary += 1000;
                                } else {
                                    if(work.fail >= 6){
                                        if(rates > 45){
                                            message.channel.send(`The boss had it enough of your mistake. The boss kicked you out of the your work.`)
                                            work.deleteOne();
                                            profile.occupation = "None";
                                            profile.save();
                                        } else {
                                            message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                            work.fail += 1;
                                            work.save();
                                        }
                                    } else {
                                        message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                        work.fail += 1;
                                        work.save();
                                    }
                                } 
                            } else if((msgs.first().content.toLowerCase()) == "forbidden cave") {
                                if(swork > 50){
                                    if(extrax > 50){
                                        message.channel.send('While you were mine in the dark cave you saw something shiny and followed the light and found a Treasure that you can sell/use.')
                                        profile.inventory += 1;
                                        profile.save();
                                        inventory.treausure += 1;
                                        inventory.save();
                                    }
                                    if(work.success >= 10){
                                        if(rates > 60){
                                            message.channel.send('You have been promoted because of your hard work. Now your salary has increase.')
                                            work.success = 0
                                            work.salary += 1000;
                                        }
                                    }
                                    message.channel.send(`Well done ${message.author.username}. You've been payed ${numx} spirit stones.`)
                                    work.success = 0
                                    work.salary += 1000;
                                } else {
                                    if(work.fail >= 6){
                                        if(rates > 45){
                                            message.channel.send(`The boss had it enough of your mistake. The boss kicked you out of the your work.`)
                                            work.deleteOne();
                                            profile.occupation = "None";
                                            profile.save();
                                        } else {
                                            message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                            work.fail += 1;
                                            work.save();
                                        }
                                    } else {
                                        message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                        work.fail += 1;
                                        work.save();
                                    }
                                } 
                            } else if((msgs.first().content.toLowerCase()) == "haunted cave") {
                                if(swork > 30){
                                    if(extrax > 70){
                                        message.channel.send('While you were mine in the dark cave you saw something shiny and followed the light and found a Treasure that you can sell/use.')
                                        profile.inventory += 1;
                                        profile.save();
                                        inventory.treausure += 1;
                                        inventory.save();
                                    }
                                    if(work.success >= 10){
                                        if(rates > 60){
                                            message.channel.send('You have been promoted because of your hard work. Now your salary has increase.')
                                            work.success = 0
                                            work.salary += 1000;
                                        }
                                    }
                                    message.channel.send(`Well done ${message.author.username}. You've been payed ${numx} spirit stones.`)
                                    work.success = 0
                                    work.salary += 1000;
                                } else {
                                    if(work.fail >= 6){
                                        if(rates > 45){
                                            message.channel.send(`The boss had it enough of your mistake. The boss kicked you out of the your work.`)
                                            work.deleteOne();
                                            profile.occupation = "None";
                                            profile.save();
                                        } else {
                                            message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                            work.fail += 1;
                                            work.save();
                                        }
                                    } else {
                                        message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                        work.fail += 1;
                                        work.save();
                                    }
                                } 
                            } else {
                                message.channel.send('You didn\'t choose among the choices.')
                            }
                        }catch(e){
                            message.channel.send(`You didn't answer in time! You didn't get payed.`)
                            work.fail += 1;
                            work.save();
                        }
                }
                if(work.Occupation === "spirithunt"){
                        const work1 = xwork.ghost[Math.floor(Math.random() * xwork.ghost.length)]
                        const work2 = xwork.ghost[Math.floor(Math.random() * xwork.ghost.length)]
                        const work3 = xwork.ghost[Math.floor(Math.random() * xwork.ghost.length)]
                        const work4 = xwork.ghost[Math.floor(Math.random() * xwork.ghost.length)]
                        const wembed = new MessageEmbed()
                        .setTitle('Work for Spirit Hunter')
                        .setDescription(`Retype the words below: \n\`${work1}\`\n\`${work2}\`\n\`${work3}\`\n\`${work4}\``)
                        .setColor('#00FF00')
                        message.channel.send(wembed).then(message => {
                            setTimeout(() => {
                                wembed.setDescription('Retype the following words earlier')
                                message.edit(wembed)
                            }, 5000)
                        })
                        try {
                            let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 20000, max: 1, errors: ["time"]})
                            if((msgs.first().content.toLowerCase()) == `${work1} ${work2} ${work3} ${work4}`){
                                message.channel.send(`Well done ${message.author.username}. You've been payed ${numx} spirit stones.`)
                                if(work.success >= 10){
                                    if(rates > 60){
                                        message.channel.send('You have been promoted because of your hard work. Now your salary has increase.')
                                        work.success = 0
                                        work.salary += 1000;
                                    }
                                }
                                balance.sstone += Number(numx);
                                balance.save()
                                work.success += 1;
                                work.save();
                                if(extrax >= 85){
                                    message.channel.send('While capturing some ghost you accidentally condense a Spirit Pill that you can sell/use.')
                                    profile.inventory += 1;
                                    profile.save();
                                    inventory.spirit += 1;
                                    inventory.save();
                                }
                            } else {
                                if(work.fail >= 6){
                                    if(rates > 45){
                                        message.channel.send(`The boss had it enough of your mistake. The boss kicked you out of the your work.`)
                                        work.deleteOne();
                                        profile.occupation = "None";
                                        profile.save();
                                    } else {
                                        message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                        work.fail += 1;
                                        work.save();
                                    }
                                } else {
                                    message.channel.send(`You didn't do well in your work. You didn't get payed on your work.`)
                                    work.fail += 1;
                                    work.save();
                                }
                            }
                        }catch(e){
                            message.channel.send(`You didn't answer in time! You didn't get payed.`)
                            work.fail += 1;
                            work.save();
                        }
                }
            } else {
                message.channel.send('You didn\'t choose among the choices <list/alchemist/taoism/hunter/laborer/miner/spirithunt>')
            }
        } else {
            message.channel.send('You don\'t have a profile yet. Do `tc!create`')
        }
    }
};
