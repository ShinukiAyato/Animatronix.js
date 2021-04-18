const TakeCareClient = require("./Structures/TakeCareClient");
const config = require("../config.json");

const client = new TakeCareClient(config);
client.start();
