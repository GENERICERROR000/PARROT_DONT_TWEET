module.exports = {
  'secret': `${process.env.CRYPT_SECRET}`,
  'database': 'mongodb://localhost/fixmycitydb',
  'port': process.env.PORT || 3000,
  'headers': (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, UPDATE, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'x-access-token, issue_id')
    next()
  }
}
