import React from 'react'
import Classes from './FinishedQuiz.module.css'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'

const FinishedQuiz= props => {
    const successCount = Object.keys(props.results).reduce((total, key)=>{
        if(props.results[key] === 'success') {
            total++
        }

        return total
    }, 0)

    return(
        <div className={Classes.FinishedQuiz}>
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        Classes[props.results[quizItem.id]]
                    ]

                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}></i>
                        </li>
                    )
                })}
            </ul>

            <p>True {successCount} of {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type="primary">Retake</Button>
                <Link to={'/'}>
                <Button type="success">Move to test list</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz