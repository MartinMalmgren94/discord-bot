const { smartRandomizeRole } = require('../../services/roleService/roleService');

function roleMessageRoute({ message }){
    const roleResult = smartRandomizeRole();
    message.reply(`${roleResult}`);
}

module.exports = {
    roleMessageRoute
}