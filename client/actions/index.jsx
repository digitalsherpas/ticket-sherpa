// import fetch from 'isomorphic-fetch';
import axios from 'axios';

export const ADD_EVENT = 'ADD_EVENT';

export function addEvent(event) {
  const obj = {
    // type: ADD_EVENT,
    // numAttendees: '0',
    // attendeesPaid: '0',
    quota: event.quota.value,
    ticketPrice: event.price.value,
    eventName: event.eventName.value,
    senderAddress: '',
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
export function authenticateLogin() {
  // const request = axios.post()
}
