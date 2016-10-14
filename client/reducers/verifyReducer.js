import { combineReducers } from 'redux';

import {
  TICKET_VERIFYING,
  TICKET_VERIFIED,
} from '../actions/index.jsx';

const ticketIsVerified = (state = false, action) => {
  switch (action.type) {
    case TICKET_VERIFYING:
      return false;
    case TICKET_VERIFIED:
      return action.payload;
    default:
      return state;
  }
};

const verifyReducer = combineReducers({
  ticketIsVerified,
});

export default verifyReducer;
