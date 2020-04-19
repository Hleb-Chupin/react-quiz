import {combineReducers} from 'redux'
import quizReducer from './quiz'
import createReducer from './creater'
import authReducer from './auth'

export default combineReducers({
    quiz: quizReducer,
    creater: createReducer,
    auth: authReducer
})