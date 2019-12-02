import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const initStore = (initialState = {}) => {
  return createStore(
    rootReducer,initialState, composeWithDevTools(applyMiddleware(thunk))
  )
}