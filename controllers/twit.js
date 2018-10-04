const twit = require('twit'),
  config = require('../config'),
  { saveTweet } = require('./elasticsearch')

module.exports = () => {
  // Config Settings For Twit
  const Twitter = new twit(config.apiKey)

  // Start Listening To Twitter Stream
  const stream = Twitter.stream('statuses/filter', { follow: config.userId })

  // Action to take when a tweet occurs
  stream.on('tweet', (tweet) => {

    // Save tweet to Elasticsearch
    saveTweet(tweet)

    // Post a new tweet with text from received tweet
    Twitter.post('statuses/update', { status: tweet.text }, (err, data, response) => {
      if(err) console.log("Error posting reply Tweet:", err)
    })
  })

  // Set Action For New Tweet
  stream.on('error', (err) => {
    console.log(err);
  })
}
