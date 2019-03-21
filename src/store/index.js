import { createStore } from 'redux'

import combineReducers from '../reducers'
import middleware from '../middlewares'

const store = createStore(combineReducers, middleware)

export default store