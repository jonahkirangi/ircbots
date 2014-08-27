var irc = require('irc');

var config = {
  server: 'irc.freenode.net',
  botName: 'MonsterBot',
  channels: ['#supersecretroom']
};

var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels,
  autoConnect: true
});

// Bot sends a welcome message to room entrants
bot.on("join", function(channel, who) {
  bot.say(channel, who + ", welcome to the SuperSecretRoom!");
});

// Log all public messages to console
bot.on('message', function(from, to, message) {
  console.log(from + ' said ' + message + ' to ' + to);
});

// Bot responds when trigger word is used in IRC chat
bot.on('message', function(from, to, message) {
  if(message.indexOf('vacation') > -1) {
    bot.say(to, 'Oooooo, I want to go on a vacation!');
  }
});
