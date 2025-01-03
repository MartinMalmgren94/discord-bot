
/**
 * 
 * @param {message} message an discord bot message 
 * @returns {members} members with in an discod bot message.
 */
function getVoiceChannelMembers({ message }){
    const voiceChannel = message?.member?.voice?.channel;
    if (!voiceChannel) {
        message.channel.send("You need to be in a voice channel to use this command.");
        return;
    }

    const members = voiceChannel.members.array();
    return members;
}

module.exports = {
    getVoiceChannelMembers
}