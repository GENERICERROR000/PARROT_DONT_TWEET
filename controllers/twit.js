const twit = require('twit'),
  config = require('../config'),
  { saveTweet } = require('./dynamo-db')

module.exports = () => {
  // Users
  const idToParrot = config.users.userIdToParrot
  const idParrot = config.users.userIdParrot
  // Config Settings For Twit
  const Twitter = new twit(config.twitter)

  // Start Listening To Twitter Stream
  const stream = Twitter.stream('statuses/filter', { follow: [idToParrot, idParrot], filter_level: 'medium' })

  // Action to take when a tweet occurs
  stream.on('tweet', (tweet) => {
    switch (tweet.user.id_str) {
      case idToParrot: // If tweet is from User being followed
        saveTweet(idToParrot, tweet)

        // Post a new tweet with text from received tweet
        Twitter.post('statuses/update', { status: tweet.text }, (err, data, response) => {
          if (err) {
            console.error("Error posting Parrot Tweet:", JSON.stringify(err, null, 2))
          } else {
            console.log("Parrot Tweet posted:", JSON.stringify(data, null, 2))
          }
        })
        break

      case idParrot: // If tweet is from Parroting acount
        saveTweet(idParrot, tweet)
        break
    }
  })

  // Set Action For New Tweet
  stream.on('error', (err) => {
    console.log(err);
  })
}
