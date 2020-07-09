import { combineReducers } from 'redux'
import { systemReducer } from 'app/system/redux/system'
import { paginationReducer } from 'app/module/pagination/store'

export const rootReducer = combineReducers({
  system: systemReducer,
  pagination: paginationReducer,
})