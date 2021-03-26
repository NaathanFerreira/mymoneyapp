import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { GetList, ShowUpdate, ShowDelete } from './BillingCycleActions'

let componentDidMount = true

function BillingCycleList(props){

    useEffect(function() {
        if(componentDidMount){
            props.GetList()           
            componentDidMount = false
        }
    })

    function renderRows(){
        const list = props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => props.ShowUpdate(bc)}> 
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => props.ShowDelete(bc)}> 
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th> Nome </th>
                        <th> Mês </th>
                        <th> Ano </th>
                        <th className="table-actions"> Ações </th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.billingCycle.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ GetList, ShowUpdate, ShowDelete }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)