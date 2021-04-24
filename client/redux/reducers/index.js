import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import dataset from './dataset'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    dataset
  })

export default createRootReducer
