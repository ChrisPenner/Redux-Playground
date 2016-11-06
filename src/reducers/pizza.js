import R from 'ramda'
import { TOGGLE_PIZZA_TOPPING, CHANGE_PIZZA_SIZE } from '../actions'

const DEFAULT_STATE = {
  toppings: {
    beef: false,
    olives: false,
    pepporoni: true,
  },
  size: 'medium',
}

export default (state=DEFAULT_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case TOGGLE_PIZZA_TOPPING:
      const existing = state.toppings[payload]
      return R.assocPath(['toppings', payload], !existing, state)

    case CHANGE_PIZZA_SIZE:
      return R.assoc('size', payload, state)

    default:
      return state
  }
}
