const { rollMessage } = require("./mock");
const { rollMessageRoute } = require('../rollMessageRoute');

test('Testing message route', () => {
    expect(() => {
        rollMessageRoute({ message: rollMessage })
    }).not.toThrow()
})