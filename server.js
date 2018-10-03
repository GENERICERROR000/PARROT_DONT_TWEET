const bodyParser = require('body-parser'),
  cors = require('cors'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  app = require('express')(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  config = require('./configs/config'),
  router = require('./router'),
  twit = require('./controllers/twit')

// ----------> Export Socket <----------
exports.activeSocket = () => {
  return io
}

// ########## Create Server ##########
// ----------> Connect To DB <----------
mongoose.connect(config.database, (err) => {
  if(err) console.log(err)
  console.log("Connected to DB:", config.database)
})

// ----------> Set Middleware <----------
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(logger('dev'))
app.use(config.headers)

// ----------> Set Routes <----------
router(app)

// ----------> Connect To Twitter API <----------
twit()

// ----------> Open Socket For Tweet Stream <----------
io.on('connection', (socket) => {
  console.log("Socket connected...")
})

// ----------> Init Server <----------
http.listen(config.port, (err) => {
  if(err) console.log('Something went wrong', err)
  console.log('Server started on port 3000...')
})
