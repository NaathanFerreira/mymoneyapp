import React, { useEffect } from 'react'

import ContentHeader from '../common/template/PageTampltes/ContentHeader'
import Content from '../common/template/PageTampltes/Content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'
import TabHeader from '../common/tab/TabHeader'
import TabContent from '../common/tab/TabContent'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectTab, showTabs } from '../common/tab/tabActions'

let componentDidMount = true

function BillingCycle(props){

    useEffect(function(){
        if(componentDidMount){
            props.selectTab('tabList')
            props.showTabs('tabList', 'tabCreate')
            componentDidMount = false
        }
    })

    return (
        <div>
            <ContentHeader title="Ciclo de Pagamentos" small="Cadastro" />
            <Content>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label="Listar" icon="bars" target="tabList"/>
                        <TabHeader label="Incluir" icon="plus" target="tabCreate"/>
                        <TabHeader label="Alterar" icon="pencil" target="tabUpdate"/>
                        <TabHeader label="Excluir" icon="trash-o" target="tabDelete"/>
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id="tabList">
                            <h1>Lista</h1>
                        </TabContent>
                        <TabContent id="tabCreate">
                            <h1>Incluir</h1>
                        </TabContent>
                        <TabContent id="tabUpdate">
                            <h1>Alterar</h1>
                        </TabContent>
                        <TabContent id="tabDelete">
                            <h1>Excluir</h1>
                        </TabContent>
                    </TabsContent>
                </Tabs>
            </Content>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)