const SlackBot = require('slackbots')
// more information about additional params https://api.slack.com/methods/chat.postMessage
const params = {
  icon_url: 'https://i.imgur.com/dI3JTSJ.png'
}

// create a bot
const bot = new SlackBot({
  token: process.env.GRITTYBOT_TOKEN, // Add a bot https://my.slack.com/services/new/bot and put the token
  name: 'Gritty'
})

bot.on('start', function () {
  // define channel, where bot exist. You can adjust it there https://my.slack.com/services
  // bot.postMessageToChannel('showrunner', ':cry:', params)

  // define existing username instead of 'user_name'
  // bot.postMessageToUser('user_name', 'Cowabunga!!!', params)

  // If you add a 'slackbot' property,
  // you will post to another user's slackbot channel instead of a direct message
  // bot.postMessageToUser('user_name', 'meow!', { 'slackbot': true, icon_emoji: ':cat:' })

  // define private group instead of 'private_group', where bot exist
  // bot.postMessageToGroup('private_group', 'meow!', params)
})

bot.on('message', function (message) {
  if (message.type === 'hello') {
    return console.log('connected')
  }
  if (message.type === 'user_typing') {
    // ignore for now
    return
  }
  if (message.type === 'error' && message.error.code === 3) {
    // ignore, this is a weird unexplained slack thing
    return
  }
  if (message.type === 'message') {
    return console.log(message)
  }
})
