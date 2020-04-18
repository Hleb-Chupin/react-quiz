import React from 'react'
import Classes from './AnswerItem.module.css'

const AnswerItem = props => {
    const cls = [Classes.AnswerItem]

    if (props.state) {
        cls.push(Classes[props.state])
    }

    return (
        <li 
            className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            { props.answer.text}
        </li>
    )
}

export default AnswerItem