import {
    USER_FETCH
} from '../../actions/user/User';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_FETCH:
            return action.payload;
        default:
            return state;
    }
};