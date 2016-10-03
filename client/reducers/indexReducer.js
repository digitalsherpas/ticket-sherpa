import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import eventDetailsReducer from './eventDetailsReducer';
import eventsListReducer from './eventsListReducer';
import hostEventsReducer from './hostEventsReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  eventDetailsReducer,
  eventsListReducer,
  hostEventsReducer,
  loginReducer,
  routing: routerReducer,
});

export default rootReducer;
