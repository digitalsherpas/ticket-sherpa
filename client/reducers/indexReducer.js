import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import eventDetailsReducer from './eventDetailsReducer';
import eventsListReducer from './eventsListReducer';
import hostEventsReducer from './hostEventsReducer';

const rootReducer = combineReducers({
  event: eventDetailsReducer,
  eventsListReducer,
  hostevents: hostEventsReducer,
  routing: routerReducer,
});

export default rootReducer;
