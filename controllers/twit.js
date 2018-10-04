const twit = require('twit'),
  config = require('../config'),
  { saveTweet } = require('./elasticsearch')

module.exports = () => {
  // Config Settings For Twit
  const Twitter = new twit(config.apiKey)

  // FN LOOK UP A USER
  // Twitter.get('users/lookup', { screen_name: '' },  function (err, data, response) {
  //   console.log(data)
  // })

  // Start Listening To Twitter Stream
  const stream = Twitter.stream('statuses/filter', { follow: config.userId })

  // Set Action For New Tweet
  stream.on('error', (err) => {
    console.log(err);
  })

  // TODO: reply to tweet and store it in elasticsearch
  // stream.on('tweet', (tweet) => {
  //   Twitter.post('statuses/update', { status: message }, (err, data, response) => {
  //       if(err) console.log("Error posting reply Tweet:", err)
  //   })
  // })
}
