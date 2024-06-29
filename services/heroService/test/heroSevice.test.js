const { smartRandomizeHero } = require("../heroService")

test('testing smart random so it doesnt out put same hero after 5 times', () => {
    for(let index = 0; index < 1000; index++) {
        for (let index = 0; index < 5; index++) {
            const history = [];
            const result = smartRandomizeHero();
            expect(history.includes(result)).toBeFalsy();
            history.push(result);
        }
    }
})