const Discord = require('discord.js');
const client = new Discord.Client();
const { rollMessageRoute } = require("./messageRoutes/roll/rollMessageRoute");
const { teamsMessageRoute } = require("./messageRoutes/teams/teamsMessageRoute");
const { roleMessageRoute } = require("./messageRoutes/role/roleMessageRoute");
const { helpMessageRoute } = require('./messageRoutes/help/helpMessageRoute');
const { kickMessageRoute } = require('./messageRoutes/kick/kickMessageRoute');

require('dotenv').config();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  switch (message.content) {
    case "!roll":
      rollMessageRoute({ message });
      break;

    case "!role":
      roleMessageRoute({ message });
      break;

    case "!help":
      helpMessageRoute({ message });
      break;
    
    default:
      break;
  }

  if (message.content.substring(0, 6) == '!teams') {
    teamsMessageRoute({ message });
    return;
  }

  if(message.content.substring(0, 5) == '!kick'){
    kickMessageRoute({ message, client })
  }
});

client.login(process.env.DISCORD_TOKEN)