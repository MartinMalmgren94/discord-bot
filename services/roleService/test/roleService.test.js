const { smartRandomizeRole, roles } = require('../roleService');

test('Test smartRandomizeRole', () => {
    const result = smartRandomizeRole();
    const validValues = Object.values(roles);
    expect(validValues).toContain(result);
})