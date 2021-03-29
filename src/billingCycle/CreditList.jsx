import React from 'react'
import Grid from '../common/layout/Grid'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Input from '../common/Form/Input'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function CreditList(props) {
    
    function Add(index, item = {}){
        if(!props.readOnly){
            props.arrayInsert('billingCycleForm', 'credits', index, item)
        }
    }

    function Remove(index){
        if(!props.readOnly && props.list.length > 1){
            props.arrayRemove('billingCycleForm', 'credits', index)
        }
    }

    const RenderRows = () => {
        const list = props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td> <Field name={`credits[${index}].name`} component={Input}
                    placeholder="Informe o nome..." readOnly={props.readOnly} /> </td>
                <td> <Field name={`credits[${index}].value`} component={Input}
                    placeholder="Informe o valor..." readOnly={props.readOnly} /> </td>
                <td>
                    <button type="button" className="btn btn-success"
                        onClick={() => Add(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type="button" className="btn btn-warning"
                        onClick={() => Add(index + 1, item)}>
                        <i className="fa fa-clone"></i>
                    </button>
                    <button type="button" className="btn btn-danger"
                        onClick={() => Remove(index)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    return (
        <Grid cols={props.cols}>
            <fieldset>
                <legend>Créditos</legend>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RenderRows()}
                    </tbody>
                </table>
            </fieldset>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)

export default connect(null, mapDispatchToProps)(CreditList)