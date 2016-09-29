const awsCognito = require('amazon-cognito-identity-js');
var poolData = { 
  UserPoolId : 'us-west-2_q8JXfprZ3', // Your user pool id here
  ClientId : '4va0ha493o2r4be2kendbn9cga' // Your client id here
};
const userPool = new awsCognito.CognitoUserPool(poolData);

//input format: {username, password, name, email, phone_number, callback}
module.exports = {
  registerUser: (userObj, cb) => {

    let attributeList = [];
    let dataEmail = {
      Name : 'email',
      Value : userObj.email
    };
    let dataPhoneNumber = {
      Name : 'phone_number',
      Value : userObj.phone_number
    };
    let dataName = {
      Name: 'name',
      Value: userObj.name
    }
    let attributeEmail = new awsCognito.CognitoUserAttribute(dataEmail);
    let attributePhoneNumber = new awsCognito.CognitoUserAttribute(dataPhoneNumber);
    let attributeName = new awsCognito.CognitoUserAttribute(dataName);

    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeName);

    userPool.signUp(userObj.username, userObj.password, attributeList, null, function(error, result){
      cb(error, result);
    });
  }
}


