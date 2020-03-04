import { combineReducers } from 'redux';
import auth from 'store/reducer/authReducer';

const rootReducer = combineReducers({
auth,
});

export default rootReducer;
