const { getUsername, kickPlayerByName, getUserFromVoiceChannel } = require('../kickService');
const { messageMock, clientMock, voiceChannelMock } = require('./mock');

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

test('test getUsername', () => {
    for (let index = 1; index < 11; index++) {
        const name = generateRandomString(index);
        const message = { content: '!kick ' + name };
        expect(getUsername({ message })).toBe(name)
    }
});
test('test getUserFromVoiceChannel', () => {
    const result = getUserFromVoiceChannel({ voiceChannel: voiceChannelMock, playerToFind: "Marre" })
})

test('test kickPlayerByName', () => {
    expect(() => {
        kickPlayerByName({ message: messageMock, client: clientMock })
    }).not.toThrow()
})