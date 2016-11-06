import {LOCATION_CHANGE} from '../actions'

const DEFAULT_STATE = window.location
export default (state=DEFAULT_STATE, action) => {
  const {payload, type} = action
  switch (type) {
    case LOCATION_CHANGE:
      return payload

    default:
      return state
  }
}
