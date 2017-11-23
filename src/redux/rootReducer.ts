import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { explorerReducer } from './explorer/reducer'
import { recordReducer } from './record/reducer'

export default combineReducers({
  router: routerReducer,
  explorer: explorerReducer, 
  record: recordReducer,
})
