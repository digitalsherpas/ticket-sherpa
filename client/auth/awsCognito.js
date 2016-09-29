// import * as AWS from 'aws-sdk');
// import * from './amazon-cognito.min.js';

// AWS.config.region = 'us-west-2'; // Region
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'us-west-2:2b9512ec-9346-4568-aef6-13682bfa58c8',
// });

// AWS.config.credentials.get(function(){
//   var syncClient = new AWS.CognitoSyncManager();
//   syncClient.openOrCreateDataset('myDataset', function(err, dataset) {
//     dataset.put('myKey', 'myValue', function(err, record){
//        dataset.synchronize({
//           onSuccess: function(data, newRecords) {
//               // Your handler code here
//           }
//        });
//     });
//   });
// });

import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
var poolData = { 
  UserPoolId : 'us-west-2_q8JXfprZ3', // Your user pool id here
  ClientId : '7mslpqlthk648mkq2k1t2jft8a' // Your client id here
};
var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

module.exports = (username, password, email, phone_number) => {

  var attributeList = [];

  var dataEmail = {
    Name : 'email',
    Value : email
  };

  var dataPhoneNumber = {
    Name : 'phone_number',
    Value : phone_number
  };
  var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
  var attributePhoneNumber = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber);

  attributeList.push(attributeEmail);
  attributeList.push(attributePhoneNumber);

  userPool.signUp(username, password, attributeList, null, function(err, result){
    if (err) {
      alert(err);
      return;
    }
    cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
  });
}



