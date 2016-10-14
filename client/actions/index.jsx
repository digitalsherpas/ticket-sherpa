// import fetch from 'isomorphic-fetch';
import axios from 'axios';
import { authenticateUser } from '../auth/awsCognito.js';
import { browserHistory } from 'react-router';
import keys from '../../keys.js';

export const BUY_EVENT = 'BUY_EVENT';

export function buyEvent(info, eventName) {
  const fromAddress = info.walletAddress.value;
  const name = info.name.value;

  return (dispatch) => {
    return axios.get(`/api/events/?eventName=${eventName}`)
    .then(({ data }) => {
      const obj = {
        contractAddress: data.eventContractAddress,
        fromAddress,
        name,
        price: Number(data.price), // TODO: type checking
      };
      return axios.post('/api/tickets', obj)
      .then(() => {
        browserHistory.push('/tickets');
      });
    });
  };
}

export const RECEIVE_SEARCH_EVENTS = 'RECEIVE_SEARCH_EVENTS';
export const SEARCH_EVENTS = 'SEARCH_EVENTS';
export const SEARCH_EVENTS_RESULTS = 'SEARCH_EVENTS_RESULTS';

export function searchEvents(eventName) {
  return (dispatch) => {
    dispatch({
      type: SEARCH_EVENTS,
      payload: eventName,
    });
    dispatch({
      type: RECEIVE_SEARCH_EVENTS,
      payload: false,
    });
    return axios.get('/api/searchEvents?eventName=' + eventName)
      .then((data) => {
        dispatch({
          type: SEARCH_EVENTS_RESULTS,
          payload: data.data,
        });
        browserHistory.push('/events');
        dispatch({
          type: RECEIVE_SEARCH_EVENTS,
          payload: true,
        });
      }).then((error) => {
        dispatch({
          type: SEARCH_EVENTS_RESULTS,
          payload: {
            error,
            data: false,
          },
        });
        dispatch({
          type: RECEIVE_SEARCH_EVENTS,
          payload: true,
        });
      });
  };
}

export const SELECT_EVENT = 'SELECT_EVENT';

export function selectEvent(event) {
  return {
    type: SELECT_EVENT,
    event,
  };
}

// retrieves events from api
// on receipt, dispatches an event to remove spinner
export const REQUEST_EVENTS = 'REQUEST_EVENTS';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

export function requestEvents() {
  const request = axios.get('/api/eventsList?readFromDB=true');

  return (dispatch) => {
    dispatch({
      type: RECEIVE_EVENTS,
      payload: false,
    });
    return request.then(({ data }) => {
      dispatch({
        type: REQUEST_EVENTS,
        payload: data,
      });
      dispatch({
        type: RECEIVE_EVENTS,
        payload: true,
      });
    }).catch((error) => {
      dispatch({
        type: REQUEST_EVENTS,
        payload: {
          error,
          data: false,
        },
      });
      dispatch({
        type: RECEIVE_EVENTS,
        payload: true,
      });
    });
  };
}

export const REQUEST_HOST_EVENTS = 'REQUEST_HOST_EVENTS';

export function requestHostEvents(username) {
  const request = axios.get('/api/HostEventsList?readFromDB=true&hostName=' + username);
  return (dispatch) => {
    return request.then(({ data }) => {
      dispatch({
        type: REQUEST_HOST_EVENTS,
        payload: data,
      });
    }).catch((error) => {
      dispatch({
        type: REQUEST_HOST_EVENTS,
        payload: {
          error,
          data: false,
        },
      });
    });
  };
}

export const REQUEST_TICKETS = 'REQUEST_TICKETS';

export function requestTickets(username) {
  const request = axios.get('/api/getTickets?readFromDB=true&userName=' + username);
  return (dispatch) => {
    return request.then(({ data }) => {
      dispatch({
        type: REQUEST_TICKETS,
        payload: data,
      });
    }).catch((error) => {
      dispatch({
        type: REQUEST_TICKETS,
        payload: {
          error,
          data: false,
        },
      });
    });
  };
}

// AUTHENTICATION ACTIONS
export const REGISTER_USER = 'REGISTER_USER';

export function registerUser(info) {
  const userObj = {
    username: info.username.value,
    password: info.password.value,
    name: info.name.value,
    email: info.email.value,
    // phone_number: info.phonenumber.value,
  };

  return (dispatch) => {
    return axios.post('/registerUser', userObj)
    .then(({}) => {
      browserHistory.push('/login');
    });
  };
}

// insert post request to Amazon authentication server here

export const USER_IS_AUTHENTICATING = 'USER_IS_AUTHENTICATING';
export const USER_AUTHENTICATION_FAILED = 'USER_AUTHENTICATION_FAILED';
export const USER_IS_AUTHENTICATED = 'USER_IS_AUTHENTICATED';

export function authenticateLogin(userObj) {
  return (dispatch) => {
    authenticateUser(userObj, (error, result) => {
      if (error) {
        dispatch({
          type: USER_AUTHENTICATION_FAILED,
        });
      } else {
        result.username = userObj.username;
        dispatch({
          type: USER_IS_AUTHENTICATED,
          payload: result,
        });
        browserHistory.push('/account');
      }
    });
    dispatch({
      type: USER_IS_AUTHENTICATING,
    });
  };
}

export const USER_LOG_OUT = 'USER_LOG_OUT';

export function logOut(userObj) {
  return (dispatch) => {
    dispatch({
      type: USER_LOG_OUT,
    });
    browserHistory.push('/');
  };
}


export const CHECK_ADDRESS = 'CHECK_ADDRESS';
export const ERROR_ADDRESS = 'ERROR_ADDRESS';

export function checkAddress(event, username) {
  const googleApi = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  const eventAddress = `${event.addressLine1.value},${event.addressLine2.value},${event.city.value},${event.state.value},${event.zipPostalCode.value},${event.country.value}`;
  const requestUrl = `${googleApi}${eventAddress}&key=${keys.GOOGLE_MAPS_API_KEY}`;

  if (event.addressLine1.value.length > 0 && event.city.value.length > 0 && event.state.value.length > 0 && event.zipPostalCode.value.length > 0) {
    return (dispatch) => {
      return axios.post(requestUrl)
      .then((results) => {
        // if geoencode returns a valid address
        if (results.data.results.length > 0) {
          return function addEvent(event, username) {
            const eventStartDateTime = new Date(event.eventStartDateAndTime.state.inputValue).toISOString();
            const eventEndDateTime = new Date(event.eventEndDateAndTime.state.inputValue).toISOString();
            const image = event.imageupload.value;

            const obj = {
              quota: event.quota.value,
              price: web3.toWei(event.price.value, 'ether'),
              eventName: event.eventName.value,
              senderAddress: web3.eth.coinbase,
              startDateTime: eventStartDateTime,
              endDateTime: eventEndDateTime,
              description: event.description.value,
              addressLine1: event.addressLine1.value,
              addressLine2: event.addressLine2.value,
              city: event.city.value,
              state: event.state.value,
              zipPostalCode: event.zipPostalCode.value,
              country: event.country.value,
              image: event.imageupload.value,
              latitude: results.data.results[0].geometry.location.lat,
              longitude: results.data.results[0].geometry.location.lng,
              username: username,
            };
            browserHistory.push('/hostcreateconfirmation');

            return axios.post('/api/events', obj)
           .then(() => {
             browserHistory.push('/hostevents');
           }).catch((error) => {
             dispatch({
               type: ERROR_ADDRESS,
               payload: 'There was an error submitting your request. Please try again later',
             });
           });
         }(event, username);
       } else {
         dispatch({
           type: ERROR_ADDRESS,
           payload: 'Please submit a valid address',
         });
       }
     }).catch((error) => {
       // possible, but highly unlikely
       dispatch({
         type: ERROR_ADDRESS,
         payload: 'There was an error submitting your request. Please try again later',
       });
     });
    };
  } else {
    return (dispatch) => {
      dispatch({
        type: ERROR_ADDRESS,
        payload: 'Please fill in all required fields',
      });
    };
  }
}

export const UPDATE_NUM_ATTENDEES = 'UPDATE_NUM_ATTENDEES';

export function updateNumAttendees(numAttendees) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_NUM_ATTENDEES,
      payload: numAttendees,
    });
  };
}

export const TICKET_VERIFYING = 'TICKET_VERIFYING';
export const TICKET_VERIFIED = 'TICKET_VERIFIED';

export function updateTicketVerificationStatus(status) {
  return (dispatch) => {
    dispatch({
      type: TICKET_VERIFIED,
      payload: status,
    })
  }
}

export function updateTicketVerificationStarted() {
  return (dispatch) => {
    dispatch({
      type: TICKET_VERIFYING,
    })
  }
}
