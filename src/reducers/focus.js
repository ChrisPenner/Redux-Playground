import { CHANGE_FOCUS } from '../actions'

const DEFAULT_STATE = 'all'

export default (state=DEFAULT_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case CHANGE_FOCUS:
      if (payload === state){
        return 'all'
      }
      return payload
    default:
      return state
  }
}
