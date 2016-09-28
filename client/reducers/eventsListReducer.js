import staticEvents from '../data/events.js'

import { combineReducers } from 'redux'
import {
  SELECT_EVENT, INVALIDATE_EVENT, REQUEST_EVENTS, RECEIVE_EVENTS
} from '../actions/index.jsx'

const selectedEvent = (state = 'reactjs', action) => {
  switch (action.type) {
    case SELECT_EVENT:
      return action.event
    default:
      return state
  }
}

const event = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const events = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_EVENT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_EVENTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_EVENTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.events,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const eventDetails = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_EVENT:
    case RECEIVE_EVENTS:
    case REQUEST_EVENTS:
      return Object.assign({}, state, {
        [action.event]: events(state[action.event], action)
      })
    default:
      return state
  }
}

const eventsList = (state = staticEvents, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const eventsListReducer = combineReducers({
  selectedEvent,
  eventDetails,
  events,
  eventsList
})

export default eventsListReducer
