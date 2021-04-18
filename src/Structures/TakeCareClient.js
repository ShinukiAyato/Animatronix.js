const { Client, Collection, MessageEmbed, MessageAttachment } = require('discord.js');
const Util = require('./Util.js');
const mongoose = require('mongoose');
const Canvas = require('canvas');
const moment = require('moment');
const { mongodbs, enterid, leaveid } = require('../../config.json')
mongoose.connect(mongodbs, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const Blacklist = require('./models/blacklist') 
const DBL = require("dblapi.js");
const dbl = new DBL( mongodbs , this.client);


module.exports = class TakeCareClient extends Client {

	constructor(options = {}) {
		super({
			disableMentions: 'everyone'
		});
		this.validate(options);

		this.commands = new Collection();

		this.aliases = new Collection();

		this.events = new Collection();

		const cooldowns = new Collection();

		this.utils = new Util(this);

		this.owners = options.owners;

		this.once('ready', () => {
			console.log(`Logged in as ${this.user.username}!`);
			setInterval(() => {
				dbl.postStats(this.guilds.cache.size);
            }, 1800000);
		});

		this.on('guildDelete', async guild => {
			const ownerx = await this.users.fetch(guild.ownerID)
			var lmaoz = this.channels.cache.get(leaveid);
			const members = guild.members.cache;
			let embed = new MessageEmbed()
			.setDescription(`**Guild Information for __${guild.name}__**`)
			.setThumbnail(guild.iconURL({ dynamic: true }))
			.addField('**⊏⊑ᖫ 𝔾𝕖𝕟𝕖𝕣𝕒𝕝 ᖭ⊒⊐**', [
                `**﴿⊱ 𝒩𝒶𝓂𝑒: ** ${guild.name}`,
                `**﴿⊱ 𝐼𝒟: ** ${guild.id}`,
				`**﴿⊱ 𝒪𝓌𝓃𝑒𝓇: ** ${ownerx.username}\#${ownerx.discriminator} \(${guild.ownerID}\)`,
				`**﴿⊱ 𝑀𝑒𝓂𝒷𝑒𝓇 𝒞𝑜𝓊𝓃𝓉: ** ${guild.memberCount}`,
				`**﴿⊱ 𝐻𝓊𝓂𝒶𝓃𝓈: ** ${guild.memberCount - members.filter(member => member.user.bot).size}`,
                `**﴿⊱ 𝐵𝑜𝓉𝓈: ** ${members.filter(member => member.user.bot).size}`,
				`\u200b`
			])
			.setFooter(`Leaved at ${new Date()}`)
			.setColor('#FF0000')
			lmaoz.send(embed)
		});
		  
		this.on('guildCreate', async guild => {
			const ownerx = await this.users.fetch(guild.ownerID)
			var lmaoz = this.channels.cache.get(enterid);
			const members = guild.members.cache;
			let embed = new MessageEmbed()
			.setDescription(`**Guild Information for __${guild.name}__**`)
			.setThumbnail(guild.iconURL({ dynamic: true }))
			.addField('**⊏⊑ᖫ 𝔾𝕖𝕟𝕖𝕣𝕒𝕝 ᖭ⊒⊐**', [
                `**﴿⊱ 𝒩𝒶𝓂𝑒: ** ${guild.name}`,
                `**﴿⊱ 𝐼𝒟: ** ${guild.id}`,
				`**﴿⊱ 𝒪𝓌𝓃𝑒𝓇: ** ${ownerx.username}\#${ownerx.discriminator} \(${guild.ownerID}\)`,
				`**﴿⊱ 𝑀𝑒𝓂𝒷𝑒𝓇 𝒞𝑜𝓊𝓃𝓉: ** ${guild.memberCount}`,
				`**﴿⊱ 𝐻𝓊𝓂𝒶𝓃𝓈: ** ${guild.memberCount - members.filter(member => member.user.bot).size}`,
                `**﴿⊱ 𝐵𝑜𝓉𝓈: ** ${members.filter(member => member.user.bot).size}`,
				`\u200b`
			])
			.setFooter(`Joined at ${new Date()}`)
			.setColor('#32CD32')
			lmaoz.send(embed)
		});

		this.on('ready', () => {
			this.user.setActivity(`${this.prefix}help`, {type: "LISTENING"});
		});

		this.on('message', async (message) => {
			const member = message.author.id;
			const blacklist = await Blacklist.findOne({
				userID: member
			})
			const mentionRegex = RegExp(`^<@!${this.user.id}>$`);

			if (!message.guild || message.author.bot) return;

			if (message.content.match(mentionRegex)) message.channel.send(`My prefix for ${message.guild.name} is \`${this.prefix}\`.`);

			const prefix = this.prefix;

			if(!message.content.startsWith(prefix)) return;

			// eslint-disable-next-line no-unused-vars
			const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

			const command = this.commands.get(cmd.toLowerCase()) || this.commands.get(this.aliases.get(cmd.toLowerCase()));
			
			if(blacklist) return message.channel.send(Shinuki());

			if (command) {
				if (!cooldowns.has(command.name)) {
					cooldowns.set(command.name, new Collection());
				}
				
				const now = Date.now();
				const timestamps = cooldowns.get(command.name);
				const cooldownAmount = (command.cd || 3) * 1000;
				
				if (timestamps.has(message.author.id)) {
					const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
				
					if (now < expirationTime) {
						const timeLeft = (expirationTime - now) / 1000;
						if(timeLeft.toFixed(1) > 86400){
							const resultx = Math.floor(timeLeft.toFixed(1)/ 86400)
							message.reply(`please wait ${resultx} day(s) before reusing the \`${command.name}\` command.`);
						} else if(timeLeft.toFixed(1) > 3600){
							const resultx = Math.floor(timeLeft.toFixed(1)/ 3600)
							message.reply(`please wait ${resultx} hour(s) before reusing the \`${command.name}\` command.`);
						} else if(timeLeft.toFixed(1) > 60){
							const resultx = Math.floor(timeLeft.toFixed(1)/ 60)
							message.reply(`please wait ${resultx} minute(s) before reusing the \`${command.name}\` command.`);
						} else {
							message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
						}
					}
				} else {
					command.run(message, args);
					timestamps.set(message.author.id, now);
					setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
				}
			}
		});
	}

	validate(options) {
		if (typeof options !== 'object') throw new TypeError('Options should be a type of Object.');

		if (!options.token) throw new Error('You must pass the token for the client.');
		this.token = options.token;

		if (!options.prefix) throw new Error('You must pass a prefix for the client.');
		if (typeof options.prefix !== 'string') throw new TypeError('Prefix should be a type of String.');
		this.prefix = options.prefix;
	}
	
	async start(token = this.token) {
		this.utils.loadCommands();
		super.login(token);
	}

};

function Shinuki() {
	const embed = new MessageEmbed()
	.setTitle('You are Banned from this bot!')
	.setDescription('To use the bot again you must appeal with the developers! \nYou can see the developers in the official Animatronix Server. \n[\`Discord Link Click Me\`](https://discord.gg/5f7HNNbnmP)')
	return embed
}