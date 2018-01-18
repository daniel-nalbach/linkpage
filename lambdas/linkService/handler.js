'use strict';
const AWS = require('aws-sdk');

module.exports.getLinks = (event, context, callback) => {

  AWS.config.update({region: 'us-east-1'});
  // const credentials = new AWS.SharedIniFileCredentials({profile: 'work-account'});
  // AWS.config.credentials = credentials;

  // Create DynamoDB document client
  const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
  const params = {
   TableName: 'linkPage',
   Key: {'url': '*', 'title': '*'}
  };

  docClient.scan(params, function(err, data) {
    const response = {
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
      },
      statusCode: 200,
      body: JSON.stringify({
        message: err ? 'Error' : 'Success',
        input: event,
        data: err || data.Items
      }),
    };
    callback(null, response);
  });
};
