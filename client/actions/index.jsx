// import fetch from 'isomorphic-fetch';
import axios from 'axios';

export function addEvent(eventName, date, time, address, price) {
  return {
    type: 'ADD_EVENT',
    eventName,
    date,
    time,
    address,
    price,
  };
}

export const SELECT_EVENT = 'SELECT_EVENT';

export function selectEvent(event) {
  return {
    type: SELECT_EVENT,
    event,
  };
}

// export const INVALIDATE_EVENT = 'INVALIDATE_EVENT';

// export function invalidateEvent(event) {
//   return {
//     type: INVALIDATE_EVENT,
//     event,
//   };
// }

export const REQUEST_EVENTS = 'REQUEST_EVENTS';

export function requestEvents() {
  const request = axios.get('/api/events');
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: REQUEST_EVENTS,
      payload: data });
    }).catch((error) => {
      dispatch({ type: REQUEST_EVENTS,
      payload: error });
    });
  };
}

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

export function receiveEvents() {
  return {
    type: RECEIVE_EVENTS,
    spinner,
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
