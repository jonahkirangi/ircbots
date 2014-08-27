var irc = require('irc');

var config = {
  server: 'irc.freenode.net',
  botName: 'MonsterBot',
  channels: ['#supersecretroom']
};

var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
});

bot.on('join', function (channel, nick) {
    return bot.say(channel, 'Here I am!');
});

bot.on('message', function(from, to, message) {
  console.log('%s said %s to %s', from, message, to);

    if(message.indexOf('hello') > -1) {
        bot.say(to, 'Hi there!');
    }
});
