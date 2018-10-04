const config = require('../config'),
  elasticsearch = require('elasticsearch')

// ----------> Connect To Twitter API <----------
const client = new elasticsearch.Client(config.elasticsearch)

// Saves a tweet to elesticsearch
exports.saveTweet = async () => {
  await client.create({
    index: 'myindex',
    type: 'mytype',
    id: '1',
    body: {
      title: 'Test 1',
      tags: ['y', 'z'],
      published: true,
      published_at: '2013-01-01',
      counter: 1
    }
  })
}
