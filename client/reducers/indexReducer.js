import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import eventDetailsReducer from './eventDetailsReducer';
import eventsListReducer from './eventsListReducer';
import hostEventsReducer from './hostEventsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  // eventDetailsReducer,
  eventsListReducer,
  hostEventsReducer,
  authReducer,
  routing: routerReducer,
});

export default rootReducer;
