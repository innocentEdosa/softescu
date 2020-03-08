import { combineReducers } from 'redux';
import auth from 'store/reducers/authReducer';
import product from 'store/reducers/productReducer';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth,
  product,
});

export default createRootReducer;
