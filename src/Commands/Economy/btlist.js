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
            aliases: ['btlists'],
            description: 'Show the list you need to prepare for breakthrough.',
            category: '<:shinlei:799554450989121546>Economy',
            usage: "<spiritual/physical>",
            ncat: "Economy",
            cooldowns: "20 seconds",
            cd: 20
        });
    }

    async run(message, args) {
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        if(!profile) return message.channel.send('You still didn\'t create a profile yet. Please use `tc!create`');
        const msgargs = args[0]
        if(msgargs === 'spiritual'){
            const embed = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle('Preparation for Breakthroughs')
            .setFooter(`Don't forget to vote the bot!`)
            .addField(`**Qi Gathering**`, [
                `*Low Grade Pill* - 3`,
                `id:\`low\``
            ])
            .addField(`**Foundation**`, [
                `*Middle Grade Pill* - 2`,
                `id:\`middle\``
            ])
            .addField(`**Gold Core**`, [
                `*Middle Grade Pill* - 4`,
                `id:\`middle\``
            ])
            .addField(`**Soul Wanderin**`, [
                `*High Grade Pill* - 2`,
                `id:\`high\``
            ])
            .addField(`**Nascent Soul**`, [
                `*High Grade Pill* - 4`,
                `id:\`high\``
            ])
            .addField(`**Ensoulment**`, [
                `*High Grade Pill* - 6`,
                `id:\`high\``
            ])
            .addField(`**Nihility**`, [
                `*Superior Grade Pill* - 3`,
                `id:\`superior\``
            ])
            .addField(`**Ascension**`, [
                `*Superior Grade Pill* - 6`,
                `id:\`superior\``
            ])
            .addField(`**Half Immortal**`, [
                `*Transcendent Grade Pill* - 2`,
                `id:\`transcendent\``
            ])
            .addField(`**Profound Immortal**`, [
                `*Transcendent Grade Pill* - 4`,
                `id:\`transcendent\``
            ])
            .addField(`**Golden Immortal**`, [
                `*Violet Efficacy Divine Grade* - 3`,
                `id:\`violet\``
            ])
            .addField(`**Immortal Venerable**`, [
                `*Void Efficacy Divine Grade* - 3`,
                `id:\`void\``
            ])
            .addField(`**Immortal King**`, [
                `*Vast Efficacy Divine Grade* - 3`,
                `id:\`vast\``
            ])
            .addField(`**Immortal Emperor**`, [
                `*Rested Efficacy Divine Grade* - 3`,
                `id:\`rested\``
            ])
            .addField(`**Half God**`, [
                `*Whole Efficacy Divine Grade* - 3`,
                `id:\`whole\``
            ])
            .addField(`**God**`, [
                `*Whole Efficacy Divine Grade* - 6`,
                `id:\`whole\``
            ])

            message.channel.send(embed)
        } else if(msgargs === 'physical'){
            const embed = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle('Preparation for Breakthroughs')
            .setFooter(`Don't forget to vote the bot!`)
            .addField(`**Mortal Flesh**`, [
                `*Low Grade Pill* - 3`,
                `id:\`low\``
            ])
            .addField(`**Soul Forming**`, [
                `*Low Grade Pill* - 6`,
                `id:\`low\``
            ])
            .addField(`**Mind Scattering**`, [
                `*Middle Grade Pill* - 3`,
                `id:\`middle\``
            ])
            .addField(`**Sarira**`, [
                `*Middle Grade Pill* - 6`,
                `id:\`middle\``
            ])
            .addField(`**Bone Refining**`, [
                `*High Grade Pill* - 4`,
                `id:\`high\``
            ])
            .addField(`**Nirvana**`, [
                `*Superior Grade Pill* - 3`,
                `id:\`superior\``
            ])
            .addField(`**Golden Body**`, [
                `*Transcendent Grade Pill* - 3`,
                `id:\`transcendent\``
            ])
            .addField(`**Golden Force**`, [
                `*Violet Efficacy Divine Grade* - 3`,
                `id:\`violet\``
            ])
            .addField(`**Heavenly Being**`, [
                `*Void Efficacy Divine Grade* - 3`,
                `id:\`void\``
            ])
            .addField(`**Heavenly God**`, [
                `*Vast Efficacy Divine Grade* - 3`,
                `id:\`vast\``
            ])
            .addField(`**Heavenly Buddha**`, [
                `*Rested Efficacy Divine Grade* - 3`,
                `id:\`rested\``
            ])
            .addField(`**Godly Buddha**`, [
                `*Whole Efficacy Divine Grade* - 5`,
                `id:\`whole\``
            ])


            message.channel.send(embed)
        } else if(!msgargs){
            message.channel.send('There is no such thing in that choices (spiritual/physical)!')
        } else {
            message.channel.send('You didn\'t choose among the choices (spiritual/physical). Cancelling the command.')
        }
    }
};