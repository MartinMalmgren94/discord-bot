const dotaHeros = require('../../data/dotaHeroes.json')
/**
 * Function that returns a heros name from dota2 and remember the 5 last heros it said so it wont me the same hero twice in a team.
 * 
 * @returns String with the name of the hero.
 */
function smartRandomizeHero() {
    return smartRandomName();
}

/**
 * Function that returns a random name of dota2 hero and remembers that last 5 so it wont be the same.
 * @returns String with a hero name.
 */
function smartRandomName() {
    const history = [];
    let isUnique = false;

    while (!isUnique) {
        randomIndex = Math.floor(Math.random() * dotaHeros.heroes.length) + 1;

        if (history.includes(randomIndex) === false) {
            history.push(randomIndex);

            if (history.length > 5) {
                history.shift();
            }
            isUnique = true;
        }
    }

    return dotaHeros?.heroes[randomIndex]?.name;
}

module.exports = {
    smartRandomizeHero
};