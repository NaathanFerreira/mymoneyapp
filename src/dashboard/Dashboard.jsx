import React from 'react'
import Content from '../common/template/PageTampltes/Content'
import ContentHeader from '../common/template/PageTampltes/ContentHeader'
import ValueBox from '../common/widget/ValueBox'
import Row from '../common/layout/Row'

export default props => {
    return (
        <div>
            <ContentHeader title="Dashboard" small="Versão 1.0"/>
            <Content>
                <Row>
                    <ValueBox cols='12 4' color='green' icon='bank' value='R$ 10'  text='Total de Créditos' />
                    <ValueBox cols='12 4' color='red' icon='credit-card' value='R$ 10'  text='Total de Debitos' />
                    <ValueBox cols='12 4' color='blue' icon='money' value='R$ 10'  text='Valor Consolidado' />
                </Row>
            </Content>
        </div>
    )
}