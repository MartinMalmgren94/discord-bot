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
  if (msg.content == '!teams') {
    const voiceChannel = msg.member.voice.channel;
    const channelMembers = voiceChannel.members.array();

    // Filter out the bot itself from the channel members array
    const channelUsers = channelMembers.filter(member => !member.user.bot)
      .map(member => member.user.username);

    const teams = teamRandomizer({numberOfTeams: 2, users: channelUsers});
    msg.channel.send(`**Team 1:**`);
    teams[0].forEach(user => {
      msg.channel.send(user);
    });
    
    msg.channel.send(`**Team 2:**`);
    teams[1].forEach(user => {
      msg.channel.send(user);
    });
    return;
  }

});

client.login(process.env.DISCORD_TOKEN)