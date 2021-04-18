module.exports = class Command {

	constructor(client, name, options = {}) {
		this.client = client;
		this.name = options.name || name;
		this.aliases = options.aliases || [];
		this.usage = `${this.client.prefix}${this.name} ${options.usage || ''}`.trim(),
		this.description = options.description || 'No description provided.';
		this.category = options.category || 'Miscellaneous';
		this.cooldowns = options.cooldowns || "5 seconds";
		this.cd = options.cd || 5;
		this.ncat = options.ncat || 'Miscellaneous';
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		throw new Error(`Command ${this.name} doesn't provide a run method!`);
	}

};