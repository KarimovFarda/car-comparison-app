import { combineReducers } from 'redux'
import product from './carsReducer'

const compareApp = combineReducers({
  product
})

export default compareApp