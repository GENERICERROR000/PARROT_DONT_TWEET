const bodyParser = require('body-parser'),
  app = require('express')(),
  logger = require('morgan'),
  helmet = require('helmet'),
  config = require('./config'),
  Twit = require('./controllers/twit')

// ----------> Set Middleware <----------

app.use(logger('common'))
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// ----------> Connect To Twitter API <----------
Twit()

// ----------> Init Server <----------
app.listen(config.port,  (err) => {
  if(err) console.log('Something went wrong', err)
  console.log(`Server started on port ${config.port}...`)
})
