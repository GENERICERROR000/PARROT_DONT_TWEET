const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      socket = require('../server')

const issueSchema = new Schema({
  posted_by: {
    type: String,
    required: true
  },
  posted_by_id: {
    type: Number,
    required: true
  },
  profile_image: {
    type: String,
    required: true
  },
  posted_on: {
    type: Date,
    required: true
  },
  tweet_content: {
    type: String,
    required: true
  },
  location: {
    type: {type: String, default: "Point"},
    coordinates: []
  },
  status: {
    type: String,
    default: "new"
  },
  hits: {
    type: Number,
    default: 1
  },
  media: [{ type: String }],
  issues: String,
  notes: String,
  report: String
}, {
    timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }}
)

issueSchema.index({ "location": "2dsphere" })

issueSchema.post('save', (tweet) => {
  const io = socket.activeSocket()
  io.emit('tweet', {tweet: tweet})
})

const Issue = mongoose.model('issue', issueSchema)
module.exports = Issue
