import React, { useEffect } from 'react'
import Content from '../common/template/PageTampltes/Content'
import ContentHeader from '../common/template/PageTampltes/ContentHeader'
import ValueBox from '../common/widget/ValueBox'
import Row from '../common/layout/Row'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {GetSummary} from './DashboardActions'

let componentDidMount = true

function Dashboard(props){
    const { credit, debt } = props.summary

    useEffect(function(){
        if(componentDidMount){
            props.GetSummary()
            componentDidMount = false;
        }
    })

    return (
        <div>
            <ContentHeader title="Dashboard" small="Versão 1.0"/>
            <Content>
                <Row>
                    <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`}  text='Total de Créditos' />
                    <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`}  text='Total de Debitos' />
                    <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`}  text='Valor Consolidado' />
                </Row>
            </Content>
        </div>
    )
}

const mapStateToProps = state => ({
    summary: state.dashboard.summary
})
const mapDispatchToProps = dispatch => bindActionCreators({GetSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)