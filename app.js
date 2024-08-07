const Discord = require('discord.js');
const client = new Discord.Client();
const { rollMessageRoute } = require("./messageRoutes/roll/rollMessageRoute");
const { teamsMessageRoute } = require("./messageRoutes/teams/teamsMessageRoute");
const { roleMessageRoute } = require("./messageRoutes/role/roleMessageRoute");
const { helpMessageRoute } = require('./messageRoutes/help/helpMessageRoute');
const { kickMessageRoute } = require('./messageRoutes/kick/kickMessageRoute');
const { heroMessageRoute } = require('./messageRoutes/hero/heroMessageRoute');

require('dotenv').config();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  const messageContent = message.content.toLocaleLowerCase()
  switch (messageContent) {
    case "!roll":
      rollMessageRoute({ message });
      break;

    case "!role":
      roleMessageRoute({ message });
      break;

    case "!help":
      helpMessageRoute({ message });
      break;

    case "!hero":
      heroMessageRoute({ message });
      break;
    
    default:
      break;
  }

  if (messageContent.substring(0, 6) == '!teams') {
    teamsMessageRoute({ message });
    return;
  }

  if(messageContent.substring(0, 5) == '!kick'){
    kickMessageRoute({ message, client })
  }
});

client.login(process.env.DISCORD_TOKEN)