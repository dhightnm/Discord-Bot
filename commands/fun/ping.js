/* eslint-disable no-unused-vars */
module.exports = {
  name: 'ping',
  description: 'Ping!',
  execute(msg) {
    msg.channel.send('Pong');
  },
};
