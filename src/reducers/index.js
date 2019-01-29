import { combineReducers } from 'redux'
import AuthReducer from './authentication/AuthReducer'

export default combineReducers({
    auth: AuthReducer,
})