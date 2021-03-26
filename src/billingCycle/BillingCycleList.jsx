import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { GetList, ShowUpdate } from './BillingCycleActions'

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
                        <th> Ações </th>
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

const mapDispatchToProps = dispatch => bindActionCreators({ GetList, ShowUpdate }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)