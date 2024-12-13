require('dotenv').config();

const token = process.env.TOKEN;
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent]}
);

client.login(
    token
);

client.on("messageCreate", (message) => {
    if(message.author.bot) return;

    message.reply({
        content: "Hey, How are you? I am Koustubh's Bot!"
    });
});