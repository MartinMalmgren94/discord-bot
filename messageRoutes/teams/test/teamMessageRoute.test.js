const { teamsMessageRoute } = require('../teamsMessageRoute');
const { teamMessage, teamMessageNoVoice } = require("./mock");

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