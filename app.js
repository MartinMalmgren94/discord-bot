const Discord = require('discord.js');
const client = new Discord.Client();
const { teamRandomizer } = require("./services/teamService/teamService");
require('dotenv').config();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content == '!roll') {
    const roll = Math.floor(Math.random() * 100) + 1;
    msg.reply(`${roll}`);
    return;
  }
  if (msg.content.includes('!teams')) {
    const voiceChannel = msg?.member?.voice?.channel;
    if(!voiceChannel){
      msg.channel.send("You need to be in a voice channel to use this command.")
      return;
    }
    const channelMembers = voiceChannel.members.array();
    const amountOfTeams = parseInt(msg.content.split("!teams ")[1].replace(/ /g, "")) || 2;
    // Filter out the bot itself from the channel members array
    const channelUsers = channelMembers.filter(member => !member.user.bot)
      .map(member => member.user.username);

    const teams = teamRandomizer({numberOfTeams: amountOfTeams, users: channelUsers});
    for (let i = 0; i < teams.length; i++) {
      const teamNumber = i + 1;
      const teamName = `Team ${teamNumber}:`;
    
      msg.channel.send(`**${teamName}**`);
      
      teams[i].forEach(user => {
        msg.channel.send(user);
      });
    }
    return;
  }

});

client.login(process.env.DISCORD_TOKEN)