import { combineReducers } from 'redux';
import authReducer from './AuthReducer'
import userReducer from './UserReducer';

const reducers = combineReducers({
    auth: authReducer,
    user: userReducer,
})

export default reducers