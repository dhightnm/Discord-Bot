/* eslint-disable consistent-return */
/* eslint-disable no-console */
const Discord = require('discord.js');
const { prefix, TOKEN } = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) { return; }
  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    msg.channel.send('Pong.');
  } else if (command === 'args-info') {
    if (!args.length) {
      return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
    } if (args[0] === 'foo') {
      return msg.channel.send('bar');
    }
    msg.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }
});

client.login(TOKEN);
