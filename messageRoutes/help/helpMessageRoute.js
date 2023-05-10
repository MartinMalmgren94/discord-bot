function helpMessageRoute({ message }){
    const helpText = `
    **Commands**
    !role
    *Get a dota2 team role*

    !teams {number}
    *Splits the people in the same voice channel to the amount of teams provided in the number field*

    !roll
    *Randoms a number between 1-100*
    `;
    message.reply(`${helpText}`);
}

module.exports = {
    helpMessageRoute
}