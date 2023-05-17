const { Collection } = require("discord.js");

const messageMock = {
    message : {
        content : "!kick lasse",
        member: {
            voice: {
                channel: {
                    members : [{user: { username: "lasse"}}]
                }
            }
        },
    },
    guild: {
        id: 1
    },
    reply : () => {}
}

const clientMock = {
    guilds: {
        cahce: [1]
    }
};

const voiceChannelMock = {
    members: ["Marre"]
}
module.exports = {
    messageMock,
    clientMock,
    voiceChannelMock
}