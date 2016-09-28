import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import eventsListReducer from './eventsListReducer.js'
import eventDetailsReducer from './eventDetailsReducer.js'
import hostEventsReducer from './hostEventsReducer.js'

const rootReducer = combineReducers({
  eventDetailsReducer,
  eventsListReducer,
  hostEventsReducer,
  routing: routerReducer
})

export default rootReducer