const { teamsMessageRoute } = require('../teamsMessageRoute');
const { teamMessage, teamMessageNoVoice, MockCollection } = require("./mock");

test("test teamMessageRoute with voiceChannel", () => {
    expect(() => {
        teamsMessageRoute({ message: teamMessage })
    }).not.toThrow()
});

test("test teamMessageRoute with no voiceChannel", () => {
    expect(() => {
        teamsMessageRoute({ message: teamMessageNoVoice })
    }).not.toThrow()
});

test('should send an error message if voiceChannel is falsy', () => {
    const message = { member: { voice: null }, channel: { send: jest.fn() } };
    teamsMessageRoute({ message });
    expect(message.channel.send).toHaveBeenCalledTimes(1);
    expect(message.channel.send).toHaveBeenCalledWith("You need to be in a voice channel to use this command.");
});

test('should send the correct response if voiceChannel is truthy', () => {
    // Set up the necessary mocks or stubs
    const members = new MockCollection();
    members.set(1, {user: { username: "Hasse"}});
    members.set(2, {user: { username: "Nasse"}});
    
    const message = {
        member: { voice: { channel: { members } } },
        content: '!teams 2',
        channel: { send: jest.fn() }
    };
    teamsMessageRoute({ message });
    expect(message.channel.send).toHaveBeenCalledTimes(1);
    expect(message.channel.send).toHaveBeenCalledWith(
        expect.stringMatching(/\*\*Team 1:\*\*\nHasse\n\*\*Team 2:\*\*\nNasse|\*\*Team 1:\*\*\nNasse\n\*\*Team 2:\*\*\nHasse/)
    ); // Replace 'Your response string' with the expected response
});