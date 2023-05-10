const { helpMessage } = require('./mock');
const { helpMessageRoute } = require('../helpMessageRoute')

test("Testing help helpMessageRoute", () => {
    expect(() => {
        helpMessageRoute({ message: helpMessage })
    }).not.toThrow()
});