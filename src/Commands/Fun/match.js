const Command = require('../../Structures/Command');
const Discord = require('discord.js');
const { Normal } = require('../../../text.json');
const { createCanvas, loadImage } = require('canvas');
const { letterTrans } = require('custom-translate');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['matchs', 'love'],
            description: 'A Match Rating',
            category: '<:dub_with_the_ohhhhhh:747996705814741042>Fun',
            usage: '<user> | <first user> <second user>',
            ncat: 'Fun'
        });
    }

    async run(message) {
        const member = message.mentions.members.first();
        const xmember = message.mentions.members.last();
        const canvas = createCanvas(950, 350);
        const ctx = canvas.getContext('2d');
        const background = await loadImage('https://i.pinimg.com/564x/13/24/a3/1324a37424f48843fe2fab8e88c2b541.jpg');
        
        if(!member) {
            message.channel.send(`Please mention someone to match you with.`).then(message.react('❌'));
        } else if (member.user.username === message.author.username){
            let author1 = letterTrans(message.author.username, Normal)
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
            ctx.strokeStyle = '#74037b';
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
            ctx.font = '40px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Match Making`, canvas.width / 2.5, canvas.height / 3.5);
        
            ctx.font = '30px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${author1} x themselves`, canvas.width / 2.5, canvas.height / 1.8);
    
            ctx.font = '30px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Love Percentage: 100%\n\nx▉▉▉▉▉▉▉▉▉▉x`, canvas.width / 2.5, canvas.height / 1.3);
        
            ctx.beginPath();
            ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
        
            const attachments = new Discord.MessageAttachment(canvas.toBuffer(), 'Lovely.png');
            message.channel.send(attachments)
        } else if(xmember !== member){
            let member1 = letterTrans(member.user.username, Normal)
            let xmember1 = letterTrans(xmember.user.username, Normal)
            const love = Math.round(Math.random() * 100);
            const loveIndex = Math.floor(love / 10);
            const loveLevel = "▉".repeat(loveIndex) + "-".repeat(10 - loveIndex);
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        
            ctx.strokeStyle = '#74037b';
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
            ctx.font = '40px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Match Making`, canvas.width / 2.5, canvas.height / 3.5);
        
            ctx.font = '30px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${member1} x ${xmember1}`, canvas.width / 2.5, canvas.height / 1.8);
    
            ctx.font = '30px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Love Percentage: ${love}%\n\nx${loveLevel}x`, canvas.width / 2.5, canvas.height / 1.3);
        
            ctx.beginPath();
            ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
        
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'Lovely.png');
            message.channel.send(attachment)
        } else {
            let member1 = letterTrans(member.user.username, Normal)
            let author1 = letterTrans(message.author.username, Normal)
            const love = Math.round(Math.random() * 100);
            const loveIndex = Math.floor(love / 10);
            const loveLevel = "▉".repeat(loveIndex) + "-".repeat(10 - loveIndex);
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        
            ctx.strokeStyle = '#74037b';
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
            ctx.font = '40px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Match Making`, canvas.width / 2.5, canvas.height / 3.5);
        
            ctx.font = '30px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${author1} x ${member1}`, canvas.width / 2.5, canvas.height / 1.8);
    
            ctx.font = '30px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Love Percentage: ${love}%\n\nx${loveLevel}x`, canvas.width / 2.5, canvas.height / 1.3);
        
            ctx.beginPath();
            ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
        
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'Lovely.png');
            message.channel.send(attachment)
        }
    }

}
