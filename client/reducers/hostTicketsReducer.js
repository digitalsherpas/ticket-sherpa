import { combineReducers } from 'redux';

import {
  REQUEST_TICKETS
} from '../actions/index.jsx';

const hostTicketList = (state = [], action) => {
  switch (action.type) {
    case REQUEST_TICKETS:
      if (!action.payload || action.payload.data !== undefined) {
        return state;
      }
      return action.payload;
    default:
      return state;
  }
};

const hostTicketsReducer = combineReducers({
  hostTicketList,
});

export default hostTicketsReducer;
