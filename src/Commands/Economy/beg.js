const Command = require('../../Structures/Command');
const mongoose = require('mongoose');
const linkdb = require('../../../config.json').mongodbs
mongoose.connect(linkdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const Money = require('../../Structures/models/currency') 
const Profile = require('../../Structures/models/profile')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'beg for some spirit stone',
            category: '<:shinlei:799554450989121546>Economy',
            ncat: "Economy",
            cooldowns: "30 seconds",
            cd: 30
        });
    }

    async run(message){
        const balance = await Money.findOne({
            userID: message.author.id
        })
        const profile = await Profile.findOne({
            userID: message.author.id
        })
        var xnum = Math.floor(Math.random() * 50) + 50
        var character = [
                "Ye XingHe",
                "Xiao Yan",
                "Jiang Yi Nian",
                "Xiao Mo",
                "Mu Chen",
                "Yong Heng Zhi Zun",
                "Lin Fei",
                "Fang Yuan",
                "Qin Yun",
                "Xue Ying",
                "Jian Chen",
                "Lin Dong",
                "Ye Mo",
                "Feng Zheng",
                "Zhu Yao",
                "Shin Young-woo",
                "Meng Hao",
                "Tian San",
                "Wei Wuxian",
                "Shinuki",
                "A Sect",
                "Mo Xuanyu"        
        ]
        const check = [
            ` gave you ${xnum} spirit stone. How nice.`,
            ` gave you ${xnum} spirit stone.`,
            ` gave you ${xnum} spirit stone out of pity`
        ]
        const xsen = [
            ` beaten you to death`,
            ` didn't show mercy`,
            ` look at you with disgust.`
        ]
        var csen = check[Math.floor(Math.random() * (check.length))]
        var wsen = xsen[Math.floor(Math.random() * (xsen.length))]
        var lmao = [ 'csen', 'wsen']
        var sen = lmao[Math.floor(Math.random() * lmao.length)]
        var char = character[Math.floor(Math.random() * (character.length))]
        if(profile){
            if(sen === 'csen'){
                message.channel.send(`${char}${csen}`)
                balance.sstone += xnum;
                balance.save();
            }
            if(sen === 'wsen'){
                message.channel.send(`${char}${wsen}`)
            }
        }
    }
};
