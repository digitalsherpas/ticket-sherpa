import { combineReducers } from 'redux';
import staticEvents from '../data/events.js';

import {
  SELECT_EVENT, INVALIDATE_EVENT, REQUEST_EVENTS, RECEIVE_EVENTS, SEARCH_EVENTS,
} from '../actions/index.jsx';

const selectEvent = (state = staticEvents, action) => {
  switch (action.type) {
    case 'SELECT_EVENT':
      return [...state, {
        eventName: action.eventName,
        date: action.date,
        time: action.time,
        address: action.address,
        price: action.price,
      }];
    default:
      return state;
  }
};

const eventsList = (state = [], action) => {
  switch (action.type) {
    case REQUEST_EVENTS:
      return action.payload || state;
    default:
      return state;
  }
};

const receiveEvents = (state = false, action) => {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.payload;
    default:
      return state;
  }
};

const searchEvents = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_EVENTS':
      return {
        ...state,
        searchEvents: action.search,
      };
    default:
      return state;
  }
};

const eventsListReducer = combineReducers({
  selectEvent,
  eventsList,
  receiveEvents,
  searchEvents,
});

export default eventsListReducer;
