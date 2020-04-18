import React from 'react'
import Classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props =>(
    <div className={Classes.ActiveQuiz}>
        <p className={Classes.Question}>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                {props.question}
            </span>

            <small>{props.answerNumber} of {props.quizLength}</small>
        </p>

        <AnswersList 
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default ActiveQuiz