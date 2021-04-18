const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const Profile = require('../../Structures/models/profile')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['shops'],
            description: 'Show the list that you can buy',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            cooldowns: "20 seconds",
            cd: 20,
        });
    }

    async run(message) {
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        if(!profile) return message.channel.send('You still didn\'t create a profile yet. Please use `tc!create`');
        const member = message.member;
            let pages = ['How it is used.', 'Shop #1', 'Shop #2', 'Shop #3', 'Shop #4'];
            let xpages = [
                [
                    `How to use the command.`,
                    `React to ⏪ to go back to a page or ⏩.`,
                    `To buy the item you need to do \`tc!buy <id>\``
                ],
                [
                    `**Low Grade Pill** - 1250\nid:\`low\`\n\n**Middle Grade Pill** - 2650\nid:\`middle\`\n\n**High Grade Pill** - 5500\nid:\`high\`\n\n**Superior Grade Pill** - 11850\nid:\`superior\``
                ],
                [
                    `**Transcendent Grade Pill** - 25500\nid:\`transcendent\`\n\n**Violet Efficacy Divine Grade** - 73600\nid:\`violet\`\n\n**Void Efficacy Divine Grade** - 130500\nid:\`void\`\n\n**Vast Efficacy Divine Grade** - 195500\nid:\`vast\``
                ],
                [
                    `**Rested Efficacy Divine Grade**: - 355000\nid:\`rested\`\n\n**Whole Efficacy Divine Grade** - 560000\nid:\`whole\`\n\n**Pill Refining Cauldron** - 20000\nid:\`cauldron\`\n\n**Rideable Flying Sword** - 25000\nid:\`rideable\``
                ],
                [
                    `**Infuse Qi Brush** - 18000\nid:\`brush\`\n\n**Demonic Pill** - 10000\nid:\`demonic\`\n\n**Devouring Seal of the Spirits** - 30000\nid:\`seal\`\n\n**Holy Relic Pickaxe** - 15000\nid:\`pickaxe\``
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
};
/*
                cooldown.add(message.author.id)
                setTimeout(() => {
                    cooldown.delete(message.author.id)
                }, cdseconds * 1000)
*/
