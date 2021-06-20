/* eslint-disable no-restricted-syntax */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, TOKEN } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) { return; }

  const args = msg.content.slice(prefix.length).trim().split(/ +/);

  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) { return; }

  const command = client.commands.get(commandName);

  if (command.args && !args.length) {
    let reply = msg.channel.send(`You didn't provide any arguments, ${msg.author}`);

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name}${command.usage}\``;
    }

    return msg.channel.send(reply);
  }

  try {
    command.execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command');
  }
});

client.login(TOKEN);
