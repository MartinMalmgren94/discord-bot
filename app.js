const Discord = require('discord.js');
const client = new Discord.Client();
const { rollMessageRoute } = require("./messageRoutes/roll/rollMessageRoute");
const { teamsMessageRoute } = require("./messageRoutes/teams/teamsMessageRoute");
const { roleMessageRoute } = require("./messageRoutes/role/roleMessageRoute");
require('dotenv').config();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content == '!roll') {
    rollMessageRoute({ message });
    return;
  }
  if (message.content.includes('!teams')) {
    teamsMessageRoute({ message });
    return;
  }
  if(message.content == '!role'){
    roleMessageRoute({ message });
    return;
  }
});

client.login(process.env.DISCORD_TOKEN)