import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-39f85.firebaseio.com/'
})