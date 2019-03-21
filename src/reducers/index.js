import { combineReducers } from 'redux'
import users_reducer from './users_reducer'
import questions_reducer from './questions_reducer'
import login_reducer from './login_reducer'
import loading_reducer from './loading_reducer'

export default combineReducers({
  users: users_reducer,
  questions: questions_reducer,
  loading: loading_reducer,
  authedUser: login_reducer,
})