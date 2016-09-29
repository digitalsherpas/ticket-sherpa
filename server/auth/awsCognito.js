'use strict';

import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
var poolData = { 
  UserPoolId : 'us-west-2_q8JXfprZ3', // Your user pool id here
  ClientId : '4va0ha493o2r4be2kendbn9cga' // Your client id here
};
const userPool = new CognitoUserPool(poolData);

//input format: {username, password, name, email, phone_number, callback}
module.exports = {
  registerUser: (userObj) => {

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
    let attributeEmail = new CognitoUserAttribute(dataEmail);
    let attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
    let attributeName = new CognitoUserAttribute(dataName);

    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeName);

    userPool.signUp(userObj.username, userObj.password, attributeList, null, function(err, result){
      if (err) {
        alert(err);
        return;
      }
      cb(err, result);
    });
  }
}


