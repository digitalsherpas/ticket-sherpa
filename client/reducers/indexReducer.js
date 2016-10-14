import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import eventDetailsReducer from './eventDetailsReducer';
import eventsListReducer from './eventsListReducer';
import hostEventsReducer from './hostEventsReducer';
import hostTicketsReducer from './hostTicketsReducer';
import authReducer from './authReducer';
import verifyReducer from './verifyReducer';

const rootReducer = combineReducers({
  eventsListReducer,
  hostEventsReducer,
  hostTicketsReducer,
  authReducer,
  verifyReducer,
  routing: routerReducer,
});

export default rootReducer;
