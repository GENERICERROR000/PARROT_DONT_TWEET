const config = require('../config'),
  elasticsearch = require('elasticsearch')

// ----------> Connect To Twitter API <----------
const client = new elasticsearch.Client(config.elasticsearch.config)

// Saves a tweet to elesticsearch
exports.saveTweet = async (data) => {
  await client.create({
    index: config.elasticsearch.index,
    type: '_doc',
    id: data.id,
    body: data
  })
}
