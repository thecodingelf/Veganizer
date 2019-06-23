import { combineReducers } from 'redux';
import AuthReducer from './authentication/AuthReducer';
import UserReducer from './user/UserReducer';

export default combineReducers({
    auth: AuthReducer,
    user: UserReducer,
})