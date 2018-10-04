module.exports = {
  'elasticsearch': {
    host: 'parrots_dont_tweet_db:' + (process.env.DB_PORT || '9200'),
    log: 'trace'
  },
  'port': process.env.API_PORT || 3000,
  'userId': `${process.env.TWITTER_USER_ID}`,
  'index': 'trump-tweets',
  'headers': (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, UPDATE, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'x-access-token, issue_id')
    next()
  },
  'apiKey': {
    consumer_key: process.env.TWIT_CONSUMER_KEY,
    consumer_secret: process.env.TWIT_CONSUMER_SECRET,
    access_token: process.env.TWIT_ACCESS_TOKEN,
    access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60000
  }
}
