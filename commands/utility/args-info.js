/* eslint-disable consistent-return */
module.exports = {
  name: 'args-info',
  description: 'Information about the arguments provided',
  args: true,
  execute(msg, args) {
    if (args[0] === 'foo') {
      return msg.channel.send('bar');
    }
    msg.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
  },
};
