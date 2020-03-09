/* eslint-disable no-console */

import {
  LOGOUT, AUTH_SUCCESS, AUTH_START, AUTH_FAILED,
} from 'store/actions/actionTypes';

const getInitialUserState = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  return user;
};

const getIsAuthenticatedInitialState = () => {
  if (Object.keys(getInitialUserState()).length) {
    return true;
  }
  return false;
};
const initialState = {
  loading: false,
  isAuthenticated: getIsAuthenticatedInitialState(),
  user: getInitialUserState(),
  authRedirect: '',
};

const authStart = (state) => ({
  ...state,
  loading: true,
});

const authFailed = (state) => ({
  ...state,
  loading: false,
});

const authSuccess = (state, { user }) => ({
  ...state,
  loading: false,
  user,
  isAuthenticated: true,
});

const logOut = (state) => ({
  ...state,
  isAuthenticated: false,
  user: {},
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START: return authStart(state);
    case AUTH_SUCCESS: return authSuccess(state, action);
    case AUTH_FAILED: return authFailed(state);
    case LOGOUT: return logOut(state);
    default:
      return state;
  }
};

export default authReducer;
