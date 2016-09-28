import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import eventDetailsReducer from './eventDetailsReducer.js'
import eventsListReducer from './eventsListReducer.js'
import hostEventsReducer from './hostEventsReducer.js'

const rootReducer = combineReducers({
  event: eventDetailsReducer,
  events: eventsListReducer,
  hostevents: hostEventsReducer,
  routing: routerReducer
})

export default rootReducer