const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content == '!roll') {
    const roll = Math.floor(Math.random() * 100) + 1;
    msg.reply(`${roll}`);
    return;
  }
  if (msg.content.contains('!teams')){
    
  }

});

client.login("MTEwMzc0MDI3MzMzMjMzMDU4OA.GjV2lE.nGwiH4Ik7MovznFI9dgjOfFVJxnpRsX7q0l9iY")