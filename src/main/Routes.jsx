import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { Redirect } from 'react-router'
import BillingCycle from '../billingCycle/BillingCycle'
import Dashboard from '../dashboard/Dashboard'

export default props => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/billingCycles" component={BillingCycle}/>
            <Redirect path="*" to="/"/>
        </Switch>
    )
}