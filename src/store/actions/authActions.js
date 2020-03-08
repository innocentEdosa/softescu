import {
  AUTH_START, AUTH_SUCCESS, AUTH_FAILED, LOGOUT,
} from 'store/actions/actionTypes';
import { signup, login } from 'api';
import { notify } from 'utils/eventEmitter';

export const signUp = (userData) => async (dispatch) => {
  dispatch({ type: AUTH_START });
  try {
    const { data: user } = await signup(userData);
    dispatch({ type: AUTH_SUCCESS, user });
    notify('authNotification', 'Sign up successful', {
      autoClose: true,
      severity: 'success',
    });
  } catch (error) {
    dispatch({ type: AUTH_FAILED });
    notify('authNotification', 'Sign up failed. Please try again', {
      autoClose: false,
      severity: 'error',
    });
  }
};

export const logIn = (userData) => async (dispatch) => {
  dispatch({ type: AUTH_START });
  try {
    const { data: user } = await login(userData);
    dispatch({ type: AUTH_SUCCESS, user });
    notify('authNotification', 'Login success', {
      autoClose: true,
      severity: 'success',
    });
  } catch (error) {
    dispatch({ type: AUTH_FAILED });
    notify('authNotification', 'Login failed. you have to try again or CREATE AN ACCOUNT ', {
      autoClose: false,
      severity: 'error',
    });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
