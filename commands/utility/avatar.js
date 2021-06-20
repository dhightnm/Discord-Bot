/* eslint-disable consistent-return */
module.exports = {
  name: 'avatar',
  description: 'Get the avatar URL of the tagged user(s), or your own avatar',
  execute(msg) {
    if (!msg.mentions.users.size) {
      return msg.channel.send(`Your avatar is: <${msg.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
    }
    const avatarList = msg.mentions.users.map((user) => `${user.username}'s avatar: <${user.displayAvatarURL({ format: 'png', dynamic: true })}>`);
    msg.channel.send(avatarList);
  },
};
