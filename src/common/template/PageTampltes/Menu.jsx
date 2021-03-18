import React from 'react'

import MenuItem from './MenuItem'
import MenuTree from './MenuTree'

// Assistir aula de atualização das bibliotecas do curso
export default props => {
    return (
        <ul className="sidebar-menu">
            <MenuItem path="/#/" label="Dashboard" icon="dashboard"/>
            <MenuTree label="Cadastro" icon="edit">
                <MenuItem path='#billingCycles' label="Ciclos de Pagamentos" icon="usd"/>
            </MenuTree>
        </ul>
    )
}