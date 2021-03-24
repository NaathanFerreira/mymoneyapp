import React from 'react'

export default props => {
    return (
        <li>
            <a href="" data-toggle='tab' data-target={props.target}>
                <i className={`fa fa-${props.icon}`}></i> {props.label}
            </a>
        </li>
    )
}