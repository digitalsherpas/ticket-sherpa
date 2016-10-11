import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import eventDetailsReducer from './eventDetailsReducer';
import eventsListReducer from './eventsListReducer';
import hostEventsReducer from './hostEventsReducer';
import hostTicketsReducer from './hostTicketsReducer';
import authReducer from './authReducer';
import mapsReducer from './mapsReducer';

const rootReducer = combineReducers({
  // eventDetailsReducer,
  eventsListReducer,
  hostEventsReducer,
  hostTicketsReducer,
  authReducer,
  mapsReducer,
  routing: routerReducer,
});

export default rootReducer;
