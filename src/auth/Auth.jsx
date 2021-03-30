import './auth.css'
import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login, signup } from './authActions'
import Row from '../common/layout/Row'
import Grid from '../common/layout/Grid'
import If from '../common/operator/If'
import Messages from '../common/Msg/Messages'
import Input from '../common/Form/InputAuth'

function Auth(props) {

    const [state, setState] = useState({ loginMode: true })

    const changeMode = () => setState({ loginMode: !state.loginMode })

    const onSubmit = (values) => {
        const { login, signup } = props
        state.loginMode ? login(values) : signup(values)
    }

    const { handleSubmit } = props
    const { loginMode } = state

    return (
        <div className="login-box">
            <div className="login-logo"><b> My</b> Money</div>
            <div className="login-box-body">
                <p className="login-box-msg">Bem vindo!</p>
                <form onSubmit={handleSubmit(v => onSubmit(v))}>
                    <Field component={Input} type="input" name="name"
                        placeholder="Nome" icon='user' hide={loginMode} />
                    <Field component={Input} type="email" name="email"
                        placeholder="E-mail" icon='envelope' />
                    <Field component={Input} type="password" name="password"
                        placeholder="Senha" icon='lock' />
                    <Field component={Input} type="password" name="confirm_password"
                        placeholder="Confirmar Senha" icon='lock' hide={loginMode} />
                    <Row>
                        <Grid cols="4">
                            <button type="submit"
                                className="btn btn-primary btn-block btn-flat">
                                {loginMode ? 'Entrar' : 'Registrar'}
                            </button>
                        </Grid>
                    </Row>
                </form>
                <br />
                <a onClick={() => changeMode()}>
                    {loginMode ? 'Novo usuário? Registrar aqui!' :
                        'Já é cadastrado? Entrar aqui!'}
                </a>
            </div>
            <Messages />
        </div>
    )
}

Auth = reduxForm({ form: "authForm" })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch)
export default connect(null, mapDispatchToProps)(Auth)
