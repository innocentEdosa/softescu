import { SIGNING_UP, SIGNING_UP_SUCCESS, SIGNING_UP_FAILED } from 'store/actions/actionTypes';
import { signup } from 'api';

const signUp = (userData) => async (dispatch) => {
  dispatch({ type: SIGNING_UP });
  console.log(userData);
};
