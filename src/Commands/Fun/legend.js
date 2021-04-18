const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11 } = require('../../../legends.json');
const color = require('../../../color.json');
let cooldown = new Set();

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['legends'],
            description: 'Making a legend of yours. Still on going.',
            category: '<:dub_with_the_ohhhhhh:747996705814741042>Fun',
            ncat: 'Fun'
        });
    }

    async run(message) {
        const cxx = color[Math.floor(Math.random()*(color.length))]
        if(cooldown.has(message.author.id)){
            message.delete();
            message.channel.send("You have to wait for 1 minute to use this command.")
        } else {
            let cdseconds = 60;
            cooldown.add(message.author.id)
            setTimeout(() => {
                cooldown.delete(message.author.id)
            }, cdseconds * 1000)   
            let xleg1 = p1.x
            let xleg2 = p2.x
            let xleg3 = p3.x
            let xleg4 = p4.x
            let xleg5 = p5.x
            let xleg6 = p6.x
            let xleg7 = p7.x
            let xleg8 = p8.x
            let xleg9 = p9.x
            let xleg10 = p10.x
            let xleg11 = p11.x
            var x1 = Math.floor((Math.random() * xleg1.length))
            var x2 = Math.floor((Math.random() * xleg2.length))
            var x3 = Math.floor((Math.random() * xleg3.length))
            var x4 = Math.floor((Math.random() * xleg4.length))
            var x5 = Math.floor((Math.random() * xleg5.length))
            var x6 = Math.floor((Math.random() * xleg6.length))
            var x7 = Math.floor((Math.random() * xleg7.length))
            var x8 = Math.floor((Math.random() * xleg8.length))
            var x9 = Math.floor((Math.random() * xleg9.length))
            var x10 = Math.floor((Math.random() * xleg10.length))
            var x11 = Math.floor((Math.random() * xleg11.length))
            let path1 = `${p1.sentence} ${xleg1[x1]}`
            let path2 = `${p2.sentence} ${xleg2[x2]}`
            let path3 = `${p3.sentence} ${xleg3[x3]}`
            let path4 = `${p4.sentence} ${xleg4[x4]}`
            let path5 = `${p5.sentence} ${xleg5[x5]}`
            let path6 = `${p6.sentence} ${xleg6[x6]}`
            let path7 = `${p7.sentence} ${xleg7[x7]}`
            let path8 = `${p8.sentence} ${xleg8[x8]}`
            let path9 = `${p9.sentence} ${xleg9[x9]}`
            let path10 = `${p10.sentence} ${xleg10[x10]}`
            let path11 = `${p11.sentence} ${xleg11[x11]}`
            const embed = new MessageEmbed()
            .setTitle(`Legend of ${message.author.username}`)
            .setDescription(`${path1}${path2}${path3}${path4}${path5}${path6}${path7}${path8}${path9}${path10}${path11}`)
            .setColor(cxx)
            message.channel.send(embed)
        }
    }

}