// import fetch from 'isomorphic-fetch';
import axios from 'axios';

export function addEvent(eventName, date, time, address, price) {
  return {
    type: ADD_EVENT,
    eventName,
    date,
    time,
    address,
    price,
  };

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: 'ADD_EVENT', payload: data})
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
