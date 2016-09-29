var AWS = require('aws-sdk');

AWS.config.region = 'us-west-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-west-2:2b9512ec-9346-4568-aef6-13682bfa58c8',
});