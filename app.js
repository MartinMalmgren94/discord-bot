const Discord = require('discord.js');
const client = new Discord.Client();
const { teamRandomizer } = require("./services/teamService/teamService");
const { rollMessageRoute } = require("./messageRoutes/roll/rollMessageRoute");
const { teamsMessageRoute } = require("./messageRoutes/teams/teamsMessageRoute");
require('dotenv').config();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  
  if (message.content == '!roll') {
    rollMessageRoute({ message })
    return;
  }
  if (message.content.includes('!teams')) {
    teamsMessageRoute({ message })
    return;
  }

});

client.login(process.env.DISCORD_TOKEN)