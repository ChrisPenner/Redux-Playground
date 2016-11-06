import {combineReducers} from 'redux'
import colorReducer from './color'
import pizzaReducer from './pizza'
import focusReducer from './focus'
import apiReducer from './api'

export default combineReducers({
  colors: colorReducer,
  pizza: pizzaReducer,
  focus: focusReducer,
  api: apiReducer,
})
