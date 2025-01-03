const { roll } = require("../../services/rollService/rollService");
const { getVoiceChannelMembers } = require("../../services/channelService/channelService");

/**
 * 
 * @param {message} object message object from the discord text channel 
 * @param {options} string sent option for special stuff. enum["-all"]
 * @returns 
 */
function rollMessageRoute({ message, options }){
    if(options == "-all"){
        const members = getVoiceChannelMembers({ message });
        const channelUsers = members?.filter(member => !member?.user?.bot)
            ?.map(member => member?.user?.username);

        message.reply(buildResponseStringRollAll({ users: channelUsers }));
        
        return;
    }
    const rollResult = roll();
    message.reply(`${rollResult}`);
}

function buildResponseStringRollAll({ users }) {
    let output = '\n';
    users.forEach(user => {
        const rollResult = roll();
        const userName = user;
        output += `**${userName}: ${rollResult}**\n`;
    })
      
    return output;
  }

module.exports = {
    rollMessageRoute
}