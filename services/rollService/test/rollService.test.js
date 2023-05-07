const { roll } = require("../rollService");

test('testing the roll function', () => {
    const reuslt = roll();
    expect(reuslt).toBeGreaterThan(0);
    expect(reuslt).toBeLessThanOrEqual(100);
})