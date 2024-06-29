const { smartRandomizeHero } = require('../../services//heroService/heroService');

function heroMessageRoute({ message }) {
    const heroResult = smartRandomizeHero();
    message.reply(`${heroResult}`);
}

module.exports = {
    heroMessageRoute
}