const staticEvents = [
  {
    eventName: 'Leonard\'s birthday bonanza',
    date: '10/10/16',
    time: '5:30pm',
    address: '944 Market St, San Francisco, CA 94103',
    price: 100000000000
  },
  {
    eventName: 'Leg day with Andrew',
    date: '10/9/16',
    time: '12:30pm',
    address: '200 Market St, San Francisco, CA 94103',
    price: 1000000
  },
  {
    eventName: 'Kevin goes to Disneyland',
    date: '10/11/16',
    time: '4:30pm',
    address: 'Disneyland Avenue',
    price: 1000000000000000000000000000
  }
]

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