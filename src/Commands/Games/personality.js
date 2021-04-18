const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const { Personality } = require('../../../animepersona.json');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['urp', 'persona', 'urps'],
            description: 'Find out what anime personality you have. Is it Kuudere, Tsundere, Dandere or Deredere?',
            category: '🎮Games',
            ncat: 'Games'
        });
    }

    async run(message) {
        let q = (Personality);
        var i = 0;
        var x = 0;
        const Embed = new MessageEmbed()
        .setTitle('What Anime Personality Do You Have?')
        .setDescription('You need to answer 10 question. Do you want to play. y/n')
        .setFooter('Every question you have 30 seconds to reply to it.')
        .setColor('#00FF00')
        message.channel.send(Embed)
        /* question 1 */
        const q1 = new MessageEmbed()
        .setTitle(q.q1)
        .setDescription(q.c1)
        .setColor('#00FF00')
        /* question 2 */
        const q2 = new MessageEmbed()
        .setTitle(q.q2)
        .setDescription(q.c2)
        .setColor('#00FF00')
        /* question 3 */
        const q3 = new MessageEmbed()
        .setTitle(q.q3)
        .setDescription(q.c3)
        .setColor('#00FF00')
        /* question 4 */
        const q4 = new MessageEmbed()
        .setTitle(q.q4)
        .setDescription(q.c4)
        .setColor('#00FF00')
        /* question 5 */
        const q5 = new MessageEmbed()
        .setTitle(q.q5)
        .setDescription(q.c5)
        .setColor('#00FF00')
        /* question 6 */
        const q6 = new MessageEmbed()
        .setTitle(q.q6)
        .setDescription(q.c6)
        .setColor('#00FF00')
        /* question 7 */
        const q7 = new MessageEmbed()
        .setTitle(q.q7)
        .setDescription(q.c7)
        .setColor('#00FF00')
        /* question 8 */
        const q8 = new MessageEmbed()
        .setTitle(q.q8)
        .setDescription(q.c8)
        .setColor('#00FF00')
        /* question 9 */
        const q9 = new MessageEmbed()
        .setTitle(q.q9)
        .setDescription(q.c9)
        .setColor('#00FF00')
        /* question 10 */
        const q10 = new MessageEmbed()
        .setTitle(q.q10)
        .setDescription(q.c10)
        .setColor('#00FF00')
        /* answer 1 */
        const a1 = new MessageEmbed()
        .setTitle('*You are a Kuudere*')
        .setDescription("An introvert that doesn't have time for love, Until you fall into it. Kuuderes appear cold and unloving, but if they do fall in love, the object of their affection is able to break through that wall and find warmth.")
        .setImage('https://thumbs.gfycat.com/MelodicImaginativeAlpineroadguidetigerbeetle-size_restricted.gif')
        .setColor('#00FF00')
        /* answer 2 */
        const a2 = new MessageEmbed()
        .setTitle('*You are a Dandere*')
        .setDescription("Which means you are shy, but cute in a way. You are not like a yandere who is shy in a dangerous way. Danderes are sweet but it takes a little bit of prodding to open them up and see them bloom.")
        .setImage(`https://em.wattpad.com/55691e41c739bcc7bd663c18261c1eb15f3ae014/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f47572d7837344c42774a6b6c75413d3d2d3234363939393135312e313434643062396162333832343062332e676966`)
        .setColor('#00FF00')
        /* answer 3 */
        const a3 = new MessageEmbed()
        .setTitle('*You are a Tsundere*')
        .setDescription("Tsunderes are tough on the outside and sweet on the inside. If you can get to the inside. They often seem snobby or arrogant especially when you start to get close. But once the barrier is broken, they're loving.")
        .setImage(`https://25.media.tumblr.com/97d4e1a359bb46cbdcbcdf55aa6b070e/tumblr_mgurb5X7BJ1r922azo1_500.gif`)
        .setColor('#00FF00')
        /* answer 4 */
        const a4 = new MessageEmbed()
        .setTitle('*You are a Deredere*')
        .setDescription("Deredere are sweet, happy, and almost innocently childlike in their love of everything and everyone. A deredere loves first and ask questions later. You can't keep a deredere down for long because they are quick to find silver linings.")
        .setImage(`https://pa1.narvii.com/6198/bd0677be1d53a8548dcd6a306ddf1f355a76adfb_hq.gif`)
        .setColor('#00FF00')
        try {
            let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
            if((msgs.first().content)== 'y'){
                message.channel.send(q1)
                try {
                    let msg1 = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                    if((msg1.first().content)== 'a'){
                        i += 2; x += 1;
                    }
                    if((msg1.first().content)== 'b'){
                        i += 3; x += 1;
                    }
                    if((msg1.first().content)== 'c'){
                        i += 1; x += 1;
                    }
                    if(x == 1){
                        message.channel.send(q2)
                        try {
                            let msg2 = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                            if((msg2.first().content)== 'a'){
                                i += 1; x += 1;
                            }
                            if((msg2.first().content)== 'b'){
                                i += 2; x += 1;
                            }
                            if((msg2.first().content)== 'c'){
                                i += 3; x += 1;
                            }
                            if(x == 2){
                                message.channel.send(q3)
                                try {
                                    let msg3 = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                                    if((msg3.first().content)== 'a'){
                                        i += 2; x += 1;
                                    }
                                    if((msg3.first().content)== 'b'){
                                        i += 3; x += 1;
                                    }
                                    if((msg3.first().content)== 'c'){
                                        i += 1; x += 1;
                                    }
                                    if(x == 3){
                                        message.channel.send(q4)                                
                                        try {
                                            let msg4 = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                                            if((msg4.first().content)== 'a'){
                                                i += 3; x += 1;
                                            }
                                            if((msg4.first().content)== 'b'){
                                                i += 1; x += 1;
                                            }
                                            if((msg4.first().content)== 'c'){
                                                i += 2; x += 1;
                                            }
                                            if(x == 4){
                                                message.channel.send(q5)
                                                try {
                                                    let msg5 = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                                                    if((msg5.first().content)== 'a'){
                                                        i += 3; x += 1;
                                                    }
                                                    if((msg5.first().content)== 'b'){
                                                        i += 1; x += 1;
                                                    }
                                                    if((msg5.first().content)== 'c'){
                                                        i += 2; x += 1;
                                                    }
                                                    if(x == 5){
                                                        message.channel.send(q6)
                                                        try {
                                                            let msg6 = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                                                            if((msg6.first().content)== 'a'){
                                                                i += 3; x += 1;
                                                            }
                                                            if((msg6.first().content)== 'b'){
                                                                i += 2; x += 1;
                                                            }
                                                            if((msg6.first().content)== 'c'){
                                                                i += 1; x += 1;
                                                            }
                                                            if(x == 6){
                                                                message.channel.send(q7)
                                                                try {
                                                                    let msg7 = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                                                                    if((msg7.first().content)== 'a'){
                                                                        i += 1; x += 1;
                                                                    }
                                                                    if((msg7.first().content)== 'b'){
                                                                        i += 2; x += 1;
                                                                    }
                                                                    if((msg7.first().content)== 'c'){
                                                                        i += 3; x += 1;
                                                                    }
                                                                    if(x == 7){
                                                                        message.channel.send(q8)
                                                                        try {
                                                                            let msg8 = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                                                                            if((msg8.first().content)== 'a'){
                                                                                i += 2; x += 1;
                                                                            }
                                                                            if((msg8.first().content)== 'b'){
                                                                                i += 1; x += 1;
                                                                            }
                                                                            if((msg8.first().content)== 'c'){
                                                                                i += 3; x += 1;
                                                                            }
                                                                            if(x == 8){
                                                                                message.channel.send(q9)
                                                                                try {
                                                                                    let msg9 = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                                                                                    if((msg9.first().content)== 'a'){
                                                                                        i += 2; x += 1;
                                                                                    }
                                                                                    if((msg9.first().content)== 'b'){
                                                                                        i += 1; x += 1;
                                                                                    }
                                                                                    if((msg9.first().content)== 'c'){
                                                                                        i += 3; x += 1;
                                                                                    }
                                                                                    if(x == 9){
                                                                                        message.channel.send(q10)
                                                                                        try {
                                                                                            let msg10 = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 30000, max: 1, errors: ["time"]})
                                                                                            if((msg10.first().content)== 'a'){
                                                                                                i += 3; x += 1;
                                                                                            }
                                                                                            if((msg10.first().content)== 'b'){
                                                                                                i += 1; x += 1;
                                                                                            }
                                                                                            if((msg10.first().content)== 'c'){
                                                                                                i += 2; x += 1;
                                                                                            }
                                                                                            if(x == 10){
                                                                                                if(i < 15) {
                                                                                                    return message.channel.send(a1)
                                                                                                }else if(i < 21) {
                                                                                                    return message.channel.send(a2)
                                                                                                }else if(i < 26) {
                                                                                                    return message.channel.send(a3)
                                                                                                }else if(i > 25) {
                                                                                                    return message.channel.send(a4)
                                                                                                }                                               
                                                                                            }else{
                                                                                                return message.channel.send("You didn't choose among the choices. Canceling the command.")
                                                                                            }
                                                                                        }catch(e){
                                                                                            return message.channel.send("You didn't reply on time. Might as well cancel the command.")
                                                                                        }
                                                        
                                                                                    }else{
                                                                                        return message.channel.send("You didn't choose among the choices. Canceling the command.")
                                                                                    }
                                                                                }catch(e){
                                                                                    return message.channel.send("You didn't reply on time. Might as well cancel the command.")
                                                                                }
                                                                            }else{
                                                                                return message.channel.send("You didn't choose among the choices. Canceling the command.")
                                                                            }
                                                                        }catch(e){
                                                                            return message.channel.send("You didn't reply on time. Might as well cancel the command.")
                                                                        }
                                                                    }else{
                                                                        return message.channel.send("You didn't choose among the choices. Canceling the command.")
                                                                    }
                                                                }catch(e){
                                                                    return message.channel.send("You didn't reply on time. Might as well cancel the command.")
                                                                }                                
                                                            }else{
                                                                return message.channel.send("You didn't choose among the choices. Canceling the command.")
                                                            }
                                                        }catch(e){
                                                            return message.channel.send("You didn't reply on time. Might as well cancel the command.")
                                                        }
                                                    }else{
                                                        return message.channel.send("You didn't choose among the choices. Canceling the command.")
                                                    }
                                                }catch(e){
                                                    return message.channel.send("You didn't reply on time. Might as well cancel the command.")
                                                }                
                                            }else{
                                                return message.channel.send("You didn't choose among the choices. Canceling the command.")
                                            }
                                        }catch(e){
                                            return message.channel.send("You didn't reply on time. Might as well cancel the command.")
                                        }        
                                    }else{
                                        return message.channel.send("You didn't choose among the choices. Canceling the command.")
                                    }
                                }catch(e){
                                    return message.channel.send("You didn't reply on time. Might as well cancel the command.")
                                }
                            }else{
                                return message.channel.send("You didn't choose among the choices. Canceling the command.")
                            }
                        }catch(e){
                            return message.channel.send("You didn't reply on time. Might as well cancel the command.")
                        }
                    }else{
                        return message.channel.send("You didn't choose among the choices. Canceling the command.")
                    }
                }catch(e){
                    return message.channel.send("You didn't reply on time. Might as well cancel the command.")
                }
            }else if((msgs.first().content)== 'n'){
                message.channel.send('If you said so then cancelling questions.')
            }else {
                return message.channel.send("You didn't choose among the choices. Might as well take that as a no.")
            }
        }catch(e){
            return message.channel.send("You didn't reply in time might as well take that as a no.")
        }
    }
}
