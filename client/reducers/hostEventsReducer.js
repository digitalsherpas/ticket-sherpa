import { combineReducers } from 'redux';
// import hostEvents from '../data/hostEvents';

import {
  REQUEST_EVENTS,
} from '../actions/index.jsx';

const hostEventsList = (state = [], action) => {
  switch (action.type) { // TODO: this appends new events wrongly
    case REQUEST_EVENTS:
      if (!action.payload || !action.payload.data) {
        return state;
      }
      return action.payload || action.payload.data;
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
