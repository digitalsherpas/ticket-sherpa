import { combineReducers } from 'redux';

import {
  REQUEST_HOST_EVENTS,
  UPDATE_NUM_ATTENDEES,
} from '../actions/index.jsx';

const hostEventsList = (state = [], action) => {
  switch (action.type) {
    case REQUEST_HOST_EVENTS:
      if (!action.payload || action.payload.data !== undefined) {
        return state;
      }
      return action.payload;
    default:
      return state;
  }
};

const hostCurrentEventNumberOfAttendees = (state = 0, action) => {
  switch (action.type) {
    case UPDATE_NUM_ATTENDEES:
      return action.payload;
    default:
      return state;
  }
};

const hostEventsReducer = combineReducers({
  hostEventsList,
  hostCurrentEventNumberOfAttendees,
});

export default hostEventsReducer;
