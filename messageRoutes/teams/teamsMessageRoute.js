const { teamRandomizer, buildResponseString } = require('../../services/teamService/teamService');
const { getVoiceChannelMembers } = require('../../services/channelService/channelService');

/**
 * 
 * @param {message} message an message sent in an textchannel i discord catched by the discord bot. 
 * @returns the bot answers with random teams containing the persons in the same voice channel as the person writting the command.
 */
function teamsMessageRoute({ message }){
  const channelMembers = getVoiceChannelMembers({ message })
  
  if(!channelMembers || channelMembers == []){
    return;
  }

  const options = message?.content?.includes('-dota2') ? 'dota2' : undefined;
  const amountOfTeams = parseInt(message?.content?.split("!teams ")[1]?.replace(/ /g, "")) || 2;
  // Filter out the bot itself from the channel members array
  const channelUsers = channelMembers?.filter(member => !member?.user?.bot)
    ?.map(member => member?.user?.username);
  
  const teams = teamRandomizer({ numberOfTeams: amountOfTeams, users: channelUsers, options });
  
  const response = buildResponseString({ teams });
  
  message.channel.send(response);
  
}

module.exports = {
    teamsMessageRoute
}