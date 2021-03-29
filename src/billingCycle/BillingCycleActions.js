import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function GetList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function Create(values) {
    return Submit(values, 'post')
}

export function Update(values) {
    return Submit(values, 'put')
}

export function Delete(values){
    return Submit(values, 'delete')
}

function Submit(values, method) {
    // redux thunk
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success("Sucesso", "Operação realizada com sucesso.")
                dispatch(Init())
            })
            .catch(e => {
                // errors é um array que foi definido no backend
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function ShowUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function ShowDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}


// inicializa o componente billingcycle, limpa o form
export function Init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        GetList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}