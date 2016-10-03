// import fetch from 'isomorphic-fetch';
import axios from 'axios';
import { authenticateUser } from '../auth/awsCognito.js';

export const BUY_EVENT = 'BUY_EVENT';

export function buyEvent(info, eventName) {
  const fromAddress = info.walletAddress.value;
  const name = info.name.value;
  axios.get('/api/events/?eventName='+eventName)
  .then(({ data }) => {
    const obj = {
      contractAddress: data.eventContractAddress,
      fromAddress: fromAddress,
      name: name,
    };
    console.log(obj, 'obj');
    axios.post('/api/tickets', obj);
  });
  // console.log(contractAddress, 'contractAddress');
  // contractAddress.then
  

  // request.then(({ data }) => {
  //   dispatch({
  //     type: REQUEST_EVENTS,
  //     payload: data,
  //   });
}

/* Example body of JSON request
{
  "contractAddress": "0x59dec10512ca71cdaf55a9d99ad098bc4131e9f1",
  "fromAddress": "0xfa6a88ff72f079e611ab427653eff5ce99cb26b9",
  "name": "Andrew"
}
*/

export const ADD_EVENT = 'ADD_EVENT';

export function addEvent(event) {
  const obj = {
    // type: ADD_EVENT,
    // numAttendees: '0',
    // attendeesPaid: '0',
    quota: event.quota.value,
    ticketPrice: event.price.value,
    eventName: event.eventName.value,
    senderAddress: event.walletAddress.value,
    // eventCreateDateTime: 'event create date time',
    startDateTime: event.eventStartDateTime.value,
    endDateTime: event.eventEndDateTime.value,
  };

  return (dispatch) => {
    return axios.post('/api/events', obj);
  };
}

export const SELECT_EVENT = 'SELECT_EVENT';

export function selectEvent(event) {
  return {
    type: SELECT_EVENT,
    event,
  };
}

// retrieves events from api
// on receipt, dispatches an event to remove spinner
export const REQUEST_EVENTS = 'REQUEST_EVENTS';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

export function requestEvents() {
  const request = axios.get('/api/events');
  return (dispatch) => {
    dispatch({
      type: RECEIVE_EVENTS,
      payload: false,
    });
    request.then(({ data }) => {
      dispatch({
        type: REQUEST_EVENTS,
        payload: data,
      });
      dispatch({
        type: RECEIVE_EVENTS,
        payload: true,
      });
    }).catch((error) => {
      dispatch({
        type: REQUEST_EVENTS,
        payload: error,
      });
      dispatch({
        type: RECEIVE_EVENTS,
        payload: true,
      });
    });
  };
}

export const SEARCH_EVENTS = 'SEARCH_EVENTS';

export function searchEvents(event) {
  return {
    type: SEARCH_EVENTS,
    event,
  };
}

// insert post request to Amazon authentication server here

export const USER_IS_AUTHENTICATING = 'USER_IS_AUTHENTICATING';
export const USER_AUTHENTICATION_FAILED = 'USER_AUTHENTICATION_FAILED';
export const USER_IS_AUTHENTICATED = 'USER_IS_AUTHENTICATED';

export function authenticateLogin(userObj) {
  return (dispatch) => {
    authenticateUser(userObj, (error, result) => {
      if (error) {
        dispatch({
          type: USER_AUTHENTICATION_FAILED,
        });
      } else {
        dispatch({
          type: USER_IS_AUTHENTICATED,
          payload: result,
        });
        browserHistory.push('/');
      }
    });
    dispatch({
      type: USER_IS_AUTHENTICATING,
    });
  };
}
