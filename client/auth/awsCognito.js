const awsCognito = require('amazon-cognito-identity-js');
const axios = require('axios');
const keys = require('../../keys');
const config = require('../../config');

const poolData = {
  UserPoolId: keys.AWS_COGNITO_USER_POOL_ID, // Your user pool id here
  ClientId: keys.AWS_COGNITO_CLIENT_ID, // Your client id here
};
const userPool = new awsCognito.CognitoUserPool(poolData);

module.exports = {
  authenticateUser: (userObj) => {
    const authenticationData = {
      Username: userObj.username,
      Password: userObj.password,
    };
    const authenticationDetails = new awsCognito.AuthenticationDetails(authenticationData);
    const userData = {
      Username: userObj.username,
      Pool: userPool,
    };
    const cognitoUser = new awsCognito.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        const authHeader = `Bearer ${result.getAccessToken().getJwtToken()}`;
        axios({
          url: `${config.SERVER_URL}:${config.SERVER_PORT}/getUserSession`,
          headers: {
            Authorization: authHeader,
          },
        });
        console.log('Authentication success');
      },

      onFailure: (error) => {
        console.log(error);
      },
    });
  },
};

