const awsCognito = require('amazon-cognito-identity-js');
const keys = require('../../keys');
const poolData = { 
  UserPoolId : keys.AWS_COGNITO_USER_POOL_ID, // Your user pool id here
  ClientId : keys.AWS_COGNITO_CLIENT_ID // Your client id here
};  
const userPool = new awsCognito.CognitoUserPool(poolData);

module.exports = {
  authenticateUser: (userObj, cb) => {
    let authenticationData = {
      Username: userObj.username,
      Password: userObj.password
    };
    let authenticationDetails = new awsCognito.AuthenticationDetails(authenticationData);
    let userData = {
      Username: userObj.username,
      Pool: userPool
    };
    let cognitoUser = new awsCognito.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        console.log('Authentication success');
      },

      onFailure: function(error) {
        console.log(error);
      },
    });
  }
}