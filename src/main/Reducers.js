import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/DashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/BillingCycleReducer'

// estado geral da aplicação
const rootReducer =  combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer
})

export default rootReducer