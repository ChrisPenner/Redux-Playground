import R from 'ramda'
import { ADD_USER, CLEAR_USERS } from '../actions'

const DEFAULT_STATE = []
export default (state=DEFAULT_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_USER:
      return [...state, payload]

    case CLEAR_USERS:
      return []

    default:
      return state
  }
}
