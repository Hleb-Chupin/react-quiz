import React from 'react'
import Classes from './MenuToggle.module.css'

const MenuToggle = props => {
    const cls = [
        Classes.MenuToggle,
        'fa'
    ]

    if (props.isOpen){
        cls.push('fa-times')
        cls.push(Classes.open)
    } else {
        cls.push('fa-bars')
    }

    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle