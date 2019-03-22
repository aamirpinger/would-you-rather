import * as API from '../utils/_DATA'

import {
    initialDataActionCreator,
    getUserActionCreator,
    getQuestionsActionCreator,
    saveQuestionActionCreator,
    saveQuestionAnswerActionCreator,
    authedUserActionCreator,
    userLoggedOutActionCreator
} from './actionCreators'


export const dispatch_authedUserAction = (authedUser) => authedUserActionCreator(authedUser)

export const dispatch_userLoggedOutAction = () => userLoggedOutActionCreator()

export const dispatch_initialDataAction = () =>
    dispatch =>
        Promise.all([API._getUsers(), API._getQuestions()])
            .then(([users, questions]) =>
                dispatch(initialDataActionCreator(users, questions)))


export const dispatch_getUserAction = () =>
    dispatch =>
        API._getUsers()
            .then((users) =>
                dispatch(getUserActionCreator(users))
            )

export const dispatch_getQuestionsAction = () =>
    dispatch =>
        API._getQuestions()
            .then((questions) =>
                dispatch(getQuestionsActionCreator(questions))
            )

export const dispatch_saveQuestionAction = (question) => {
    return dispatch =>
        API._saveQuestion(question)
            .then((question) => {
                dispatch(saveQuestionActionCreator(question))
                console.log("Question saved!")
            })
}
export const dispatch_saveQuestionAnswerAction = (authedUser, qid, answer) => {
    return dispatch =>
        API._saveQuestionAnswer({ authedUser, qid, answer })
            .then(() => {
                dispatch(saveQuestionAnswerActionCreator(authedUser, qid, answer))
                console.log("Answered saved!")
            })
}