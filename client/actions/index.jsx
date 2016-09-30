import fetch from 'isomorphic-fetch';


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

export const INVALIDATE_EVENT = 'INVALIDATE_EVENT';

export function invalidateEvent(event) {
  return {
    type: INVALIDATE_EVENT,
    event,
  };
}

export const REQUEST_EVENTS = 'REQUEST_EVENTS';

export function requestEvents(event) {
  return {
    type: REQUEST_EVENTS,
    event,
  };
}

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

export function receiveEvents(event, json) {
  return {
    type: RECEIVE_EVENTS,
    event,
    Events: json.data.children.map(child => child.data),
    receivedAt: Date.now(),
  };
}
