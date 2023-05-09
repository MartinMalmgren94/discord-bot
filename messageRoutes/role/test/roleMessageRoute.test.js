const { roleMessage } = require("./mock");
const { roleMessageRoute } = require('../roleMessageRoute');

test('Testing message route', () => {
    expect(() => {
        roleMessageRoute({ message: roleMessage })
    }).not.toThrow()
})