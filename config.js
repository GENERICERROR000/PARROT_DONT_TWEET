module.exports = {
  'port': process.env.API_PORT || 3000,
  'aws': {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  },
  'users': {
    'userIdToParrot': process.env.TWITTER_USER_ID_TO_PARROT,
    'userIdParrot': process.env.TWITTER_USER_ID_PARROT
  },
  'twitter': {
    consumer_key: process.env.TWIT_CONSUMER_KEY,
    consumer_secret: process.env.TWIT_CONSUMER_SECRET,
    access_token: process.env.TWIT_ACCESS_TOKEN,
    access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60000
  }
}
