import React, { useEffect } from 'react'

import '../common/template/dependencies'

import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import App from './App'
import Auth from '../auth/Auth'

import { validateToken } from '../auth/authActions'

let componentDidMount = true

function AuthOrApp(props) {

    useEffect(function () {
        if (componentDidMount) {
            if (props.auth.user) {
                props.validateToken(props.auth.user.token)
                componentDidMount = false
            }
        }
    })

    const { user, validToken } = props.auth

    if (user && validToken) {
        axios.defaults.headers.common['authorization'] = user.token
        return <App>{props.children}</App>
    } else if (!user && !validToken) {
        return <Auth />
    } else {
        return false
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)