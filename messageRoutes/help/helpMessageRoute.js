function helpMessageRoute({ message }){
    const helpText = `
    **Commands**
    !role
    *Get a dota2 team role*

    !teams {number} {options}
    *Splits the people in the same voice channel to the amount of teams provided in the number field and you can also provide an option such as -dota2*

    !roll
    *Randoms a number between 1-100*
    `;
    message.reply(`${helpText}`);
}

module.exports = {
    helpMessageRoute
}