const Command = require('../../Structures/Command');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['pong'],
            description: 'Send the ping of the bot',
            category: '⚙️Utilities',
            ncat: 'Utilities'
        });
    }

    async run(message) {
        const msg = await message.channel.send('Pinging...');

        const latency = msg.createdTimestamp - message.createdTimestamp;
        const choices = ['Is this really my ping?', 'Is this okay? I can\'t look!', 'I hope it isn\'t bad!'];
        const response = choices[Math.floor(Math.random() * choices.length)];

        msg.edit(`${response} - Bot Latency \`${latency}ms\`, Api Latency: \`${Math.round(this.client.ws.ping)}ms\``);
    }

};