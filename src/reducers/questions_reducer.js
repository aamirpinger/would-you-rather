import {
    GET_QUESTIONS,
    SAVE_QUESTION,
    SAVE_QUESTION_ANSWER,
    INITIAL_DATA,
} from '../actions/actionCreators'

function questions_reducer(state = {}, action) {

    switch (action.type) {
        case GET_QUESTIONS:
            return action.questions
        case SAVE_QUESTION:

            return Object.assign(state, { [action.question.id]: action.question })
        case SAVE_QUESTION_ANSWER:
            state[action.qid][action.answer].votes.push(action.authedUser)
            return state
        case INITIAL_DATA:
            return action.questions
        default:
            return state
    }
}
export default questions_reducer
