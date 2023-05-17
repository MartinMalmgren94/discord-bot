const { kickPlayerByName } = require('../../services/kickService/kickService');

function kickMessageRoute({ message, client }){
    kickPlayerByName({ message, client });   
}

module.exports = {
    kickMessageRoute
}