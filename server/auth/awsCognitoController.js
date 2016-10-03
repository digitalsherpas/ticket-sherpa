const AWS = require('aws-sdk');
const awsCognito = require('amazon-cognito-identity-js');
const keys = require('../../keys');

const poolData = { 
  UserPoolId : keys.AWS_COGNITO_USER_POOL_ID, // Your user pool id here
  ClientId : keys.AWS_COGNITO_CLIENT_ID // Your client id here
};
const userPool = new awsCognito.CognitoUserPool(poolData);

//input format: {username, password, name, email, phone_number, callback}
module.exports = {
  registerUser: (userObj, cb) => {

    const attributeList = [];
    const dataEmail = {
      Name : 'email',
      Value : userObj.email,
    };
    const dataPhoneNumber = {
      Name : 'phone_number',
      Value : userObj.phone_number,
    };
    const dataName = {
      Name: 'name',
      Value: userObj.name,
    };
    const attributeEmail = new awsCognito.CognitoUserAttribute(dataEmail);
    const attributePhoneNumber = new awsCognito.CognitoUserAttribute(dataPhoneNumber);
    const attributeName = new awsCognito.CognitoUserAttribute(dataName);

    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeName);

    userPool.signUp(userObj.username, userObj.password, attributeList, null, (error, result) => {
      cb(error, result);
    });
  },

  verifyUser: (userObj, cb) => {

  }
}


