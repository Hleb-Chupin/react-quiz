import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from './actionTypes'
import axios from '../../axios/axios-quiz'

export function addQuestion(item) {
    return {
        type: CREATE_QUIZ_QUESTION,
        item
    }
}

export function resetQuizCreation() {
    return {
        type: RESET_QUIZ_CREATION
    }
}

export function createQuiz(item) {
    return async (dispatch, getState) => {
        await axios.post('/quizes.json', getState().creater.quiz)
        dispatch(resetQuizCreation())
    }
}