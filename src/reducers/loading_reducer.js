import {
    INITIAL_DATA
} from '../actions/actionCreators'

function loading_reducer(state = true, action) {
    switch (action.type) {
        case INITIAL_DATA:
            return false
        default:
            return state
    }
}

export default loading_reducer
