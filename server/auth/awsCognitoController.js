const awsCognito = require('amazon-cognito-identity-js');
const rp = require('request-promise');
const jwt = require('jsonwebtoken');
const jwkToPem = require('jwk-to-pem');
const keys = require('../../keys');
const config = require('../../config');

const poolData = {
  UserPoolId: keys.AWS_COGNITO_USER_POOL_ID, // Your user pool id here
  ClientId: keys.AWS_COGNITO_CLIENT_ID, // Your client id here
};
const userPool = new awsCognito.CognitoUserPool(poolData);

// input format: {username, password, name, email, phone_number, callback}
module.exports = {
  registerUser: (userObj, cb) => {
    const attributeList = [];
    const dataEmail = {
      Name: 'email',
      Value: userObj.email,
    };
    const dataPhoneNumber = {
      Name: 'phone_number',
      Value: userObj.phone_number,
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

  verifyUser: (userToken, cb) => {
    const token = jwt.decode(userToken, { complete: true });
    const userPoolUrl = 'https://cognito-idp.us-west-2.amazonaws.com/us-west-2_q8JXfprZ3';
    const userPoolJwkUrl = `${userPoolUrl}/.well-known/jwks.json`;
    // TODO: put this in a worker
    rp({
      url: userPoolJwkUrl,
    }).then((obj) => {
      const jwtSet = JSON.parse(obj);
      const jwtSetObj = {};
      jwtSet.keys.forEach((tkn) => {
        jwtSetObj[tkn.kid] = tkn;
      });

      const userJwk = jwtSetObj[token.header.kid];
      if (userJwk === undefined ||
        token.payload.iss !== userPoolUrl ||
        token.payload.token_use !== 'access') {
        cb(null, 'Authorization failed');
      } else {
        const isVerified = jwt.verify(userToken, jwkToPem(userJwk));
        if (isVerified) {
          rp({
            method: 'POST',
            url: `${config.SERVER_URL}:${config.DB_SERVER_PORT}/db/findOrCreateUser`,
            body: {
              token: userToken,
            },
            json: true,
          }).then((user) => {
            cb(null, user);
          }).catch((err) => {
            cb(null, err);
          });
        } else {
          cb(null, 'Authorization failed');
        }
      }
    }).catch((err) => {
      cb(err, null);
    });
  },
};
