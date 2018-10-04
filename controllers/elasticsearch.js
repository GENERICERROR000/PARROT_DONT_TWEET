const config = require('../config'),
  elasticsearch = require('elasticsearch')

// ----------> Connect To Twitter API <----------
const client = new elasticsearch.Client(config.elasticsearch)

// Saves a tweet to elesticsearch
exports.saveTweet = async (data) => {
  await client.create({
    index: config.index,
    type: '_doc',
    body: data
  })
}
