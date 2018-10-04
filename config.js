module.exports = {
  'secret': `${process.env.CRYPT_SECRET}`,
  'database': 'localhost/fixmycitydb',
  'port': process.env.PORT || 3000,
  'headers': (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, UPDATE, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'x-access-token, issue_id')
    next()
  },
  'apiKey': {
    consumer_key: process.env.TWIT_CK,
    consumer_secret: process.env.TWIT_CS,
    access_token: process.env.TWIT_AT,
    access_token_secret: process.env.TWIT_ATS,
    timeout_ms: 60000
  }
}
