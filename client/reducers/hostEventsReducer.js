import { combineReducers } from 'redux';

import {
  REQUEST_HOST_EVENTS,
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

const hostEventsReducer = combineReducers({
  hostEventsList,
});

export default hostEventsReducer;
