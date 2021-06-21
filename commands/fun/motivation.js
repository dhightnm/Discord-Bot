const axios = require('axios');

module.exports = {
  name: 'motivation',
  description: 'Gives the user a bit of motivation for the day',
  args: false,
  usage: '<motivation>',
  execute(msg) {
    function motivation() {
      return axios.get('http://zenquotes.io/api/random')
        .then((res) => res.data)
        .then((data) => `${data[0].q} - ${data[0].a}`);
    }
    motivation().then((quote) => msg.channel.send(quote));
  },
};
