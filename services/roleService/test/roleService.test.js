const { smartRandomizeRole, roles } = require('../roleService');

test('Testing smartRandomizeRole for a hole team', () => {
    let history = [];
    for (let index = 0; index < 20; index++) {
        const result = smartRandomizeRole();
        const validValues = Object.values(roles);
        expect(validValues).toContain(result);
        expect(history.includes(result)).toBeFalsy()
        history.push(result)
        if(history.length === 5) history = [];
    }
});