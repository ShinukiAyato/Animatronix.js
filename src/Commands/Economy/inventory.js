const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const Profile = require('../../Structures/models/profile');
const Inventory = require('../../Structures/models/inventory');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['inve', "inv"],
            description: 'Show your inventory',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            cooldowns: "5 minutes",
            cd: 300,
        });
    }

    async run(message) {
        const inventory = await Inventory.findOne({
            userID: message.author.id
        })
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        if(!profile) return message.channel.send('You still didn\'t create a profile yet. Please use `tc!create`')
        if(profile){
            const member = message.member;
            let pages = ['How it is used.', 'Inventory #1', 'Inventory #2', 'Inventory #3', 'Inventory #4', 'Inventory #5'];
            let xpages = [
                [
                    `How to use the command.`,
                    `React to ⏪ to go back to a page or ⏩.`,
                    `To buy the item you need to do \`tc!buy <id>\``
                ],
                [
                    `**Low Grade Pill** - ${inventory.low}\nid:\`low\`\n\n**Middle Grade Pill** - ${inventory.middle}\nid:\`middle\`\n\n**High Grade Pill** - ${inventory.high}\nid:\`high\`\n\n**Superior Grade Pill** - ${inventory.superior}\nid:\`superior\``
                ],
                [
                    `**Transcendent Grade Pill** - ${inventory.transcendent}\nid:\`transcendent\`\n\n**Violet Efficacy Divine Grade** - ${inventory.violet}\nid:\`violet\`\n\n**Void Efficacy Divine Grade** - ${inventory.void}\nid:\`void\`\n\n**Vast Efficacy Divine Grade** - ${inventory.vast}\nid:\`vast\``
                ],
                [
                    `**Rested Efficacy Divine Grade** - ${inventory.rested}\nid:\`rested\`\n\n**Whole Efficacy Divine Grade** - ${inventory.whole}\nid:\`whole\`\n\n**Demonic Pill** - ${inventory.demonic}\nid:\`demonic\`\n\n**Pill Refining Cauldron** - ${inventory.cauldron}\nid:\`cauldron\``
                ],
                [
                    `**Rideable Flying Sword** - ${inventory.rideable}\nid:\`rideable\`\n\n**Infuse Qi Brush** - ${inventory.brush}\nid:\`brush\`\n\n**Devouring Seal of the Spirits** - ${inventory.seal}\nid:\`seal\`\n\n**Holy Relic Pickaxe** - ${inventory.pickaxe}\nid:\`pickaxe\``
                ],
                [
                    `**Spirit Pill** - ${inventory.spirit}\nid:\`spirit\`\n\n**Talisman** - ${inventory.talisman}\nid:\`talisman\`\n\n**Spirit Stone Treasure** - ${inventory.treasure}\nid:\`treasure\`\n\n**Raid Box** - ${inventory.raid}\nid:\`raid\`\n\n**Event Box** - ${inventory.event}\nid:\`event\``
                ]
            ]
            let page = 1;

            const embed = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle(pages[page-1])
            .setFooter(`Page ${page} of ${pages.length}`)
            .setDescription(xpages[page-1])

            message.channel.send(embed).then(message => {
                message.react('⏪').then( r => {
                    message.react('⏩')

                    const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === member.user.id;
                    const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === member.user.id;

                    const backwards = message.createReactionCollector(backwardsFilter, { time: 60000 });
                    const forwards = message.createReactionCollector(forwardsFilter, { time: 60000 });

                    backwards.on('collect', r => {
                        if (page === 1) return;
                        page--;
                        embed.setDescription(xpages[page-1])
                        embed.setTitle(pages[page-1])
                        embed.setFooter(`Page ${page} of ${pages.length}`)
                        message.edit(embed)
                    })

                    forwards.on('collect', r => {
                        if (page === pages.length) return;
                        page++;
                        embed.setDescription(xpages[page-1])
                        embed.setTitle(pages[page-1])
                        embed.setFooter(`Page ${page} of ${pages.length}`)
                        message.edit(embed)
                    })
                })
            })
        message.delete(); 
        }
    }
};
