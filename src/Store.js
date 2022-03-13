import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import authReducer from './reducers/auth.reducers'

const rootReducer = combineReducers({
  auth: authReducer,
})

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

export default Store
