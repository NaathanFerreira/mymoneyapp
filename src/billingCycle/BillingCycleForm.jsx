import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Init } from './BillingCycleActions'

import LabelAndInput from '../common/Form/LabelAnInput'

function BillingCycleForm(props){

    // função própria do reduxForm
    const { handleSubmit} = props

    return (
        <form role="form" onSubmit={handleSubmit}>
            <div className="box-body">
                <Field name="name" component={LabelAndInput} 
                    label="Nome" cols="12 4" placeholder="Informe o nome..." readOnly={props.readOnly}/>
                <Field name="month" component={LabelAndInput} 
                    type="number" label="Mês" cols="12 4" placeholder="Informe o mês..." readOnly={props.readOnly}/>
                <Field name="year" component={LabelAndInput} 
                    type="number" label="Ano" cols="12 4" placeholder="Informe o ano..." readOnly={props.readOnly}/>
            </div>
            <div className="box-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" class="btn btn-danger" onClick={props.Init}> Cancelar </button>
            </div>
        </form>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ Init }, dispatch)

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
// destroyOnUnmount: como o form será re-utilizado em lugares diferentes (incluir, alterar e excluir), ele não pode destruir os dados ao inicializar
export default connect(null, mapDispatchToProps)(BillingCycleForm)