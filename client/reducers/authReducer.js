import { combineReducers } from 'redux';

const authReducer = (state = {
  auth: false,
  authenticating: 'none',
}, action) => {
  switch (action.type) {
    case 'USER_IS_AUTHENTICATING':
      return {
        ...state,
        authenticating: 'sent',
      };
    case 'USER_AUTHENTICATION_FAILED':
      return {
        ...state,
        authenticating: 'complete',
      };
    case 'USER_IS_AUTHENTICATED':
      return {
        auth: true,
        authenticating: 'complete',
        username: action.payload.username
      };
    case 'USER_AUTHENTICATION_COMPLETE':
      return {
        ...state,
        authenticating: 'none',
      };
    case 'USER_LOG_OUT':
      return {
        auth: false,
        authenticating: 'none',
      };
    default:
      return state;
  }
};

export default authReducer;
