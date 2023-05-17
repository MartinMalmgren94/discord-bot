function kickPlayerByName({ message, client }){
    const guild = client?.guilds?.cache?.get(message?.guild?.id);
    if(guild){
        const playerName = getUsername({ message });
        const voiceChannel = message?.member?.voice?.channel;

        const member = getUserFromVoiceChannel({ voiceChannel, playerToFind: playerName });
        
        if (member) {
            member.voice.kick();
          } else {
            message.reply('There are no users with this name ' + playerName)
          }

        
        return;
    }
    message.reply("Something went wrong could not get the guild. Please try again or contact my creator.")
}
function getUserFromVoiceChannel({ voiceChannel, playerToFind }){
    return voiceChannel?.members?.find(
        (member) => member?.user?.username === playerToFind
    );
}

function getUsername({ message }) {
    return message.content.substring(message.content.indexOf("!kick") + 5).replace(/\s/g, "");
}

module.exports = {
    kickPlayerByName,
    getUserFromVoiceChannel,
    getUsername
}