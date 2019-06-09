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
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser]['answers'],
                        [action.qid]: action.answer
                    }
                }
            }
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: [...state[action.question.author].questions, action.question.id]
                }
            }
        default:
            return state
    }
}
export default users_reducer
