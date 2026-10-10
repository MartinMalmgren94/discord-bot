const { getipv4Address } = require('../../services/serverStatusService/serverStatusService');

function serverStatusMessageRoute({ message }){
    getipv4Address().then(ip => {
        message.reply("IP: " + ip);
    }).catch(() => {
        message.reply("IP: Unavailable");
    });
}

module.exports = {
    serverStatusMessageRoute
}