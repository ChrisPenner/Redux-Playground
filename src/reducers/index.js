import {combineReducers} from 'redux'
import colorReducer from './color'
import pizzaReducer from './pizza'
import focusReducer from './focus'

export default combineReducers({
  colors: colorReducer,
  pizza: pizzaReducer,
  focus: focusReducer,
})
