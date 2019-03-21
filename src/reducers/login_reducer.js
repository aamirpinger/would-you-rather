import {
    LOGIN_USER,
    LOGOUT_USER,
    INITIAL_DATA
} from '../actions/actionCreators'

function login_reducer(state = [], action) {
    switch (action.type) {
        case LOGIN_USER:
            return action.authedUser
        case LOGOUT_USER:
            return false
        case INITIAL_DATA:
            return false
        default:
            return state
    }
}
export default login_reducer
