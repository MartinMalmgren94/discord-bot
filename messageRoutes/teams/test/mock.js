const teamMessage = {
    channel: {
        send: () => {}
    },
    memeber: {
        voice: {
            channel: {
                members: []
            }
        }
    }
}

const teamMessageNoVoice = {
    channel: {
        send: () => {}
    },
    memeber: {}
}

module.exports = {
    teamMessage,
    teamMessageNoVoice
}