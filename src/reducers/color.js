import R from 'ramda'
import { CHANGE_COLOR } from '../actions'

const DEFAULT_STATE = {
  hue: 200,
}

export default (state=DEFAULT_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case CHANGE_COLOR:
      return R.assoc('hue', payload, state)

    default:
      return state
  }
}
