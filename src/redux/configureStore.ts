import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'
import rootReducer from './rootReducer'

declare var window: {
  __REDUX_DEVTOOLS_EXTENSION__: Function
};

export const history = createHistory({
  basename: `${process.env.PUBLIC_URL}`
})

const initialState = {}
const enhancers = []
const middleware = [thunkMiddleware, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const store = createStore(rootReducer, initialState, composedEnhancers)

export default store
