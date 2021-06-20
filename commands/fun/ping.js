/* eslint-disable no-unused-vars */
module.exports = {
  name: 'ping',
  description: 'Ping!',
  execute(msg, args) {
    msg.channel.send('Pong');
  },
};
