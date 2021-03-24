import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/DashboardReducer'
import TabReducer from '../common/tab/tabReducer'

// estado geral da aplicação
const rootReducer =  combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer
})

export default rootReducer