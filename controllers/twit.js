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
  const stream = Twitter.stream('statuses/filter', { follow: [idToParrot, idParrot], filter_level: 'low' })

  // Remove empty strings - cause DynamoDb to throw error
  const removeEmptyStringElements = (obj) => {
    for (var prop in obj) {
      if (typeof obj[prop] === 'object') {
        removeEmptyStringElements(obj[prop])
      } else if(obj[prop] === '') {
        obj[prop] = 'EMPTY_STRING_FIX'
      }
    }
    console.log(obj);
    return obj
  }

  // Check if tweet has been truncated and need full_text
  const selectText = (tweet) => {
    if (tweet.truncated) {
      return tweet.extended_tweet.full_text
    } else {
      return tweet.text
    }
  }

  // Action to take when a tweet occurs
  stream.on('tweet', (tweet) => {
    var cleanedTweet = removeEmptyStringElements(tweet)

    switch (cleanedTweet.user.id_str) {
      case idToParrot: // If tweet is from User being followed
        saveTweet(idToParrot, cleanedTweet)
        console.log("TWEET TO PARROT:", cleanedTweet)
        var tweetText = selectText(cleanedTweet)

        // Post a new tweet with text from received tweet
        Twitter.post('statuses/update', { status: tweetText }, (err, data, response) => {
          if (err) console.error("Error posting Parrot Tweet:", err)
        })
        break

      case idParrot: // If tweet is from Parroting acount
        saveTweet(idParrot, cleanedTweet)
        console.log("PARROT TWEETED:", cleanedTweet);
        break
    }
  })

  // Set Action For New Tweet
  stream.on('error', (err) => {
    console.log(err);
  })
}
