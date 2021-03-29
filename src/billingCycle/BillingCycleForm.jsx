import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Init } from './BillingCycleActions'

import LabelAndInput from '../common/Form/LabelAnInput'
import ItemList from './ItemList'
import Summary from './Summary'

function BillingCycleForm(props) {

    function CalculateSummary(){
        const sum = (t, v) => t + v
        return {
            sumOfCredits: props.credits.map(c => +c.value || 0).reduce(sum, 0),
            sumOfDebts: props.debts.map(d => +d.value || 0).reduce(sum, 0)
        }
    }

    const { sumOfCredits, sumOfDebts} = CalculateSummary()

    // função própria do reduxForm
    const { handleSubmit } = props

    return (
        <form role="form" onSubmit={handleSubmit}>
            <div className="box-body">
                <Field name="name" component={LabelAndInput}
                    label="Nome" cols="12 4" placeholder="Informe o nome..." readOnly={props.readOnly} />
                <Field name="month" component={LabelAndInput}
                    type="number" label="Mês" cols="12 4" placeholder="Informe o mês..." readOnly={props.readOnly} />
                <Field name="year" component={LabelAndInput}
                    type="number" label="Ano" cols="12 4" placeholder="Informe o ano..." readOnly={props.readOnly} />
                <Summary credit={sumOfCredits} debt={sumOfDebts} />
                <ItemList cols="12 6 " readOnly={props.readOnly} list={props.credits}
                    field="credits" legend="Créditos" />
                <ItemList cols="12 6 " readOnly={props.readOnly} list={props.debts}
                    field="debts" legend="Débitos" showStatus={true}/>
            </div>
            <div className="box-footer">
                <button type="submit" className={`btn btn-${props.btnSubmitClass}`}>
                    {props.submitLabel}
                </button>
                <button type="button" class="btn btn-secondary" onClick={props.Init}> Cancelar </button>
            </div>
        </form>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ Init }, dispatch)

// pega os valores que estão no estado do form (valores que foram passados ao inicializar o form na action)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
// destroyOnUnmount: como o form será re-utilizado em lugares diferentes (incluir, alterar e excluir), ele não pode destruir os dados ao inicializar
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)