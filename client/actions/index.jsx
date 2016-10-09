// import fetch from 'isomorphic-fetch';
import axios from 'axios';
import { authenticateUser } from '../auth/awsCognito.js';
import { browserHistory } from 'react-router';

export const REGISTER_USER = 'REGISTER_USER';

export function registerUser(info) {
  const userObj = {
    username: info.username.value,
    password: info.password.value,
    name: info.name.value,
    email: info.email.value,
    phone_number: info.phonenumber.value,
  };

  return (dispatch) => {
    return axios.post('/registerUser', userObj)
    .then(({}) => {
      console.log('signup success');
      browserHistory.push('/');
    });
  };
}

export const BUY_EVENT = 'BUY_EVENT';

export function buyEvent(info, eventName) {
  const fromAddress = info.walletAddress.value;
  const name = info.name.value;

  return (dispatch) => {
    return axios.get(`/api/events/?eventName=${eventName}`)
    .then(({ data }) => {
      const obj = {
        contractAddress: data.eventContractAddress,
        fromAddress,
        name,
        price: Number(data.price), // TODO: type checking
      };
      return axios.post('/api/tickets', obj)
      .then(() => {
        browserHistory.push('/hostevents');
      });
    });
  };
}

export const RECEIVE_SEARCH_EVENTS = 'RECEIVE_SEARCH_EVENTS';
export const SEARCH_EVENTS = 'SEARCH_EVENTS';
export const SEARCH_EVENTS_RESULTS = 'SEARCH_EVENTS_RESULTS';

export function searchEvents(eventName) {
  return (dispatch) => {
    dispatch({
      type: SEARCH_EVENTS,
      payload: eventName,
    });
    dispatch({
      type: RECEIVE_SEARCH_EVENTS,
      payload: false,
    });
    return axios.get('/api/searchEvents?eventName=' + eventName)
      .then((data) => {
        dispatch({
          type: SEARCH_EVENTS_RESULTS,
          payload: data.data,
        });
        browserHistory.push('/events');
        dispatch({
          type: RECEIVE_SEARCH_EVENTS,
          payload: true,
        });
      }).then((error) => {
        dispatch({
          type: SEARCH_EVENTS_RESULTS,
          payload: {
            error,
            data: false,
          },
        });
        dispatch({
          type: RECEIVE_SEARCH_EVENTS,
          payload: true,
        });
      });
  };
}

export const ADD_EVENT = 'ADD_EVENT';

export function addEvent(event) {
  const eventStartDateTime = new Date(
    event.eventStartYear.value,
    event.eventStartMonth.value,
    event.eventStartDay.value,
    event.eventStartTime.value).toISOString();
  const eventEndDateTime = new Date(
    event.eventEndYear.value,
    event.eventEndMonth.value,
    event.eventEndDay.value,
    event.eventEndTime.value).toISOString();
  const obj = {
    // type: ADD_EVENT,
    // numAttendees: '0',
    // attendeesPaid: '0',
    quota: event.quota.value,
    ticketPrice: event.price.value,
    eventName: event.eventName.value,
    senderAddress: event.walletAddress.value,
    // eventCreateDateTime: 'event create date time',
    startDateTime: eventStartDateTime,
    endDateTime: eventEndDateTime,
    description: event.description.value,
    addressLine1: event.addressLine1.value,
    addressLine2: event.addressLine2.value,
    city: event.city.value,
    state: event.state.value,
    zipPostalCode: event.zipPostalCode.value,
    country: event.country.value,
    image: event.image.value,
  };

  return (dispatch) => {
    // USER HERE
    return axios.get('/getuser')
    .then(({data}) => {
      obj.username = data.username;
      return axios.post('/api/events', obj);
    })
    .then(() => {
      browserHistory.push('/events');
    });
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
  const request = axios.get('/api/eventsList?readFromDB=true');

  return (dispatch) => {
    dispatch({
      type: RECEIVE_EVENTS,
      payload: false,
    });
    return request.then(({ data }) => {
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
        payload: {
          error,
          data: false,
        },
      });
      dispatch({
        type: RECEIVE_EVENTS,
        payload: true,
      });
    });
  };
}

export const REQUEST_HOST_EVENTS = 'REQUEST_HOST_EVENTS';
export const RECEIVE_HOST_EVENTS = 'RECEIVE_HOST_EVENTS';

export function requestHostEvents(username) {
  const request = axios.get('/api/HostEventsList?readFromDB=true&hostName=' + username);
  return (dispatch) => {
    dispatch({
      type: RECEIVE_HOST_EVENTS,
      payload: false,
    });
    return request.then(({ data }) => {
      dispatch({
        type: REQUEST_HOST_EVENTS,
        payload: data,
      });
      dispatch({
        type: RECEIVE_HOST_EVENTS,
        payload: true,
      });
    }).catch((error) => {
      dispatch({
        type: REQUEST_HOST_EVENTS,
        payload: {
          error,
          data: false,
        },
      });
      dispatch({
        type: RECEIVE_HOST_EVENTS,
        payload: true,
      });
    });
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
        result.username = userObj.username;
        dispatch({
          type: USER_IS_AUTHENTICATED,
          payload: result,
        });
        browserHistory.push('/host');
      }
    });
    dispatch({
      type: USER_IS_AUTHENTICATING,
    });
  };
}

export const USER_LOG_OUT = 'USER_LOG_OUT';

export function logOut(userObj) {
  return (dispatch) => {
    dispatch({
      type: USER_LOG_OUT,
    });
    browserHistory.push('/');
  };
}
