import { combineReducers } from 'redux'
import eventsListReducer from 'eventsListReducer'
import eventDetailsReducer from 'eventDetailsReducer'

const eventsAppReducer = combineReducers({
  eventsListReducer,
  eventDetailsReducer
})

export default eventsAppReducer