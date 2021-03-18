import React from 'react'
import './MenuItem.css'

export default props => {
    return (
        <li>
            <a href={props.path}>
                <div className="menuItem">
                <i className={`fa fa-${props.icon}`}></i>
                    <span>{props.label}</span>
                </div>
            </a>
        </li>
    )
}