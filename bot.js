const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "d!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('Pingim **' + client.ping + '**ms');
  }
});

client.login('NDQ0NTI1MTIzNzU2NzUyOTA3.DddL0A.jIbW2J-42aWik8ln--775Diar-c');
