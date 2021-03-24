import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/DashboardReducer'

// estado geral da aplicação
const rootReducer =  combineReducers({
  dashboard: DashboardReducer
})

export default rootReducer