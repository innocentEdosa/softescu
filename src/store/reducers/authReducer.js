/* eslint-disable no-console */

import { AUTH_START, SIGNING_UP_SUCCESS, SIGNING_UP_FAILED } from 'store/actions/actionTypes';

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: {},
  error: {},
  verifyingUser: false,
  authRedirect: '',
  changingPassword: false,
  signUpSuccess: false,
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
