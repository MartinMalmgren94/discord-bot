const { teamRandomizer } = require('../../services/teamService/teamService');

function teamsMessageRoute({ message }){
  const voiceChannel = message?.member?.voice?.channel;
  if (!voiceChannel) {
    message.channel.send("You need to be in a voice channel to use this command.");
    return;
  }
  
  const channelMembers = voiceChannel.members.array();
  const amountOfTeams = parseInt(message.content.split("!teams ")[1].replace(/ /g, "")) || 2;
  // Filter out the bot itself from the channel members array
  const channelUsers = channelMembers.filter(member => !member.user.bot)
    .map(member => member.user.username);
  
  const teams = teamRandomizer({ numberOfTeams: amountOfTeams, users: channelUsers });
  
  let output = '';
  for (let i = 0; i < teams.length; i++) {
    const teamNumber = i + 1;
    const teamName = `Team ${teamNumber}:`;
  
    output += `**${teamName}**\n`;
    
    teams[i].forEach(user => {
      output += `${user}\n`;
    });
  }
  
  message.channel.send(output);
  
}

module.exports = {
    teamsMessageRoute
}