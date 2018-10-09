const AWS = require('aws-sdk')
const config = require('../config')

exports.saveTweet = (userId, tweet) => {
  AWS.config.update(config.aws)

  const docClient = new AWS.DynamoDB.DocumentClient()

  var params = {
    TableName: userId + '-tweets',
    Item: tweet
  }

  docClient.put(params, (err, data) => {
    if (err) {
      console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2))
    } else {
      console.log("Added item:", JSON.stringify(data, null, 2))
    }
  })
}
