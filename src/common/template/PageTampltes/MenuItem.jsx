import React from 'react'
import './MenuItem.css'
import { Link } from 'react-router-dom'

export default props => {
    return (
        <li>
            <Link to={props.path}>
                <div className="menuItem">
                <i className={`fa fa-${props.icon}`}></i>
                    <span>{props.label}</span>
                </div>
            </Link>
        </li>
    )
}