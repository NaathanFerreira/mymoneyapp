import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tabActions'

function TabHeader(props){

    const selected = props.tab.selected === props.target

    return (
        <li className={selected ? "active" : ''}>
            <a href="javascript:;" data-toggle='tab' data-target={props.target}
            onClick={() => props.selectTab(props.target)}>
                <i className={`fa fa-${props.icon}`}></i> {props.label}
            </a>
        </li>
    )
}

const mapStateToProps = state => ({
    tab: state.tab
})
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)