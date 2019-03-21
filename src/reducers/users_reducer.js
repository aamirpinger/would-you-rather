import {
    GET_USERS,
    INITIAL_DATA,
    SAVE_QUESTION,
    SAVE_QUESTION_ANSWER,
} from '../actions/actionCreators'

function users_reducer(state = [], action) {
    switch (action.type) {
        case GET_USERS:
            return action.users
        case INITIAL_DATA:
            return action.users
        case SAVE_QUESTION_ANSWER:
            Object.assign(state[action.authedUser]['answers'], { [action.qid]: action.answer })
            return state
        case SAVE_QUESTION:
            state[action.question.author].questions.push(action.question.id)
            return state
        default:
            return state
    }
}
export default users_reducer
