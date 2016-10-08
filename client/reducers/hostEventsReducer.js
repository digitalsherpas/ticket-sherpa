import { combineReducers } from 'redux';

import {
  REQUEST_EVENTS,
  REQUEST_HOST_EVENTS,
} from '../actions/index.jsx';

const hostEventsList = (state = [], action) => {
  switch (action.type) {
    case REQUEST_EVENTS:
      if (!action.payload || action.payload.data !== undefined) {
        return state;
      }
      return action.payload;
    case REQUEST_HOST_EVENTS:
      if (!action.payload || action.payload.data !== undefined) {
        return state;
      }
      return action.payload;
    case 'ADD_EVENT':
      return [...state, {
        numAttendees: action.numAttendees,
        attendeesPaid: action.attendeesPaid,
        quota: action.quota,
        price: action.price,
        eventName: action.eventName,
        eventCreateDateTime: action.eventCreateDateTime,
        eventStartDateTime: action.eventStartDateTime,
        eventEndDateTime: action.eventEndDateTime,
      }];
    default:
      return state;
  }
};

const hostEventsReducer = combineReducers({
  hostEventsList,
});

export default hostEventsReducer;
