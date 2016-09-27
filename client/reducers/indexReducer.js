import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import visibilityFilterReducer from './visibilityFilterReducer'

const eventsAppReducer = combineReducers({
  eventsReducer,
  visibilityFilterReducer
})

export default eventsAppReducer