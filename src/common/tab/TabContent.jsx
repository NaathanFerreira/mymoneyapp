import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function TabContent(props){

    const selected = props.tab.selected === props.id

    return (
        <div id={props.id}
        className={`tab-pane ${selected ? 'active' : ''}`}>
            {props.children}
        </div>
    )
}

const mapStateToProps = state => ({
    tab: state.tab
})

export default connect(mapStateToProps)(TabContent)