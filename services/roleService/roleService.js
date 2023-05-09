const roles = {
    1: "Safe lane (1)",
    2: "Mid (2)",
    3: "Off lane (3)",
    4: "Soft support (4)",
    5: "Hard support (5)"
}
const history = [];

function smartRandomizeRole(){
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    return roles[randomNumber];
}

module.exports = {
    smartRandomizeRole,
    roles
}