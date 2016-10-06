// import fetch from 'isomorphic-fetch';
import axios from 'axios';
import { authenticateUser } from '../auth/awsCognito.js';
import { browserHistory } from 'react-router';

export const BUY_EVENT = 'BUY_EVENT';

export function buyEvent(info, eventName) {
  const fromAddress = info.walletAddress.value;
  const name = info.name.value;

  return (dispatch) => {
    return axios.get('/api/events/?eventName='+eventName)
    .then(({ data }) => {
      const obj = {
        contractAddress: data.eventContractAddress,
        fromAddress: fromAddress,
        name: name,
        price: data.price,
      };
      return axios.post('/api/tickets', obj)
      .then(() => {
        browserHistory.push('/hostevents');
      });
    });
  };
}

export const SEARCH_EVENTS = 'SEARCH_EVENTS';

export function searchEvents(eventName) {
  return (dispatch) => {
    return axios.get('/api/events/?eventName='+eventName)
    .then(({ data }) => {
      console.log(data);
      browserHistory.push('/events/' + data);
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
    return axios.post('/api/events', obj)
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
  const request = axios.get('/api/events');
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
