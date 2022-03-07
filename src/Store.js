import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import authReducer from './reducers/auth.reducers'

const rootReducer = combineReducers({
  auth: authReducer,
})

export const Store = createStore(rootReducer, applyMiddleware(thunk))
