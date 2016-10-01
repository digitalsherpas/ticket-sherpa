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

const event = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// const events = (state = {
//   isFetching: false,
//   didInvalidate: false,
//   items: [],
// }, action) => {
//   switch (action.type) {
//     case INVALIDATE_EVENT:
//       return Object.assign({}, state, {
//         didInvalidate: true,
//       });
//     case REQUEST_EVENTS:
//       return Object.assign({}, state, {
//         isFetching: true,
//         didInvalidate: false,
//       });
//     case RECEIVE_EVENTS:
//       return Object.assign({}, state, {
//         isFetching: false,
//         didInvalidate: false,
//         items: action.events,
//         lastUpdated: action.receivedAt,
//       });
//     default:
//       return state;
//   }
// };

const events = (state = {
  events: [],
}, action) => {
  switch (action.type) {
    case REQUEST_EVENTS:
      return {
        ...state,
        requestedEvents: action.payload,
        success: true,
      };
      // action.payload;
    default:
      return state;
  }
};

const eventDetails = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_EVENT:
    case RECEIVE_EVENTS:
    case REQUEST_EVENTS:
      return Object.assign({}, state, {
        [action.event]: events(state[action.event], action),
      });
    default:
      return state;
  }
};

const eventsList = (state = [], action) => {
  switch (action.type) {
    case REQUEST_EVENTS:
      return state.concat(action.payload);
    default:
      return state;
  }
};

// const finishAjax = (state = {}, action) => {
//   switch (action.type) {
//     case 
//   }
// }

const searchEvents = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_EVENTS':
      // e.preventDefault();
      console.log('something happened');
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
  eventDetails,
  events,
  eventsList,
  searchEvents,
});

export default eventsListReducer;
