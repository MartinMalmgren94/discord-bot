const { roll } = require("../../services/rollService/rollService");

function rollMessageRoute({ message }){
    const rollResult = roll();
    message.reply(`${rollResult}`);
}

module.exports = {
    rollMessageRoute
}