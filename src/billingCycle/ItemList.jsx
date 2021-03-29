import React from 'react'
import Grid from '../common/layout/Grid'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Input from '../common/Form/Input'

import If from '../common/operator/If'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function ItemList(props) {

    function Add(index, item = {}) {
        if (!props.readOnly) {
            props.arrayInsert('billingCycleForm', props.field, index, item)
        }
    }

    function Remove(index) {
        if (!props.readOnly && props.list.length > 1) {
            props.arrayRemove('billingCycleForm', props.field, index)
        }
    }

    const RenderRows = () => {
        const list = props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td> <Field name={`${props.field}[${index}].name`} component={Input}
                    placeholder="Informe o nome..." readOnly={props.readOnly} /> </td>
                <td> <Field name={`${props.field}[${index}].value`} component={Input}
                    placeholder="Informe o valor..." readOnly={props.readOnly} /> </td>
                <If test={props.showStatus}>
                    <td> <Field name={`${props.field}[${index}].status`} component={Input}
                        placeholder="Informe o status..." readOnly={props.readOnly} /> </td>
                </If>
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
                <legend>{props.legend}</legend>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <If test={props.showStatus}>
                                <th>Status</th>
                            </If>
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

export default connect(null, mapDispatchToProps)(ItemList)