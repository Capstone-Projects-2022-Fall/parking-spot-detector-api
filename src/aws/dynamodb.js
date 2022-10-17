const AWS = require('aws-sdk');
const { AWSCredits } = require('./credits/credits');
const { region, accessKey, secretKey } = AWSCredits;

AWS.config.update({
    region: region,
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
});

const dyDB = AWS.DynamoDB;
const dyClient = dyDB.DocumentClient();

module.exports = {
    dyClient,
    dyDB
};
