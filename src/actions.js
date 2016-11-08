export const CHANGE_COLOR = 'CHANGE_COLOR'
export const changeColor = (hue) => {
  return {
    type: CHANGE_COLOR,
    payload: hue,
  }
}

export const TOGGLE_PIZZA_TOPPING = 'TOGGLE_PIZZA_TOPPING'
export const togglePizzaTopping = (topping) => ({
  type: TOGGLE_PIZZA_TOPPING,
  payload: topping,
})

export const CHANGE_PIZZA_SIZE = 'CHANGE_PIZZA_SIZE'
export const changePizzaSize = (size) => ({
  type: CHANGE_PIZZA_SIZE,
  payload: size,
})

export const CHANGE_FOCUS = 'CHANGE_FOCUS'
export const changeFocus = (focus) => ({
  type: CHANGE_FOCUS,
  payload: focus,
})

export const ADD_USER = 'ADD_USER'
export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
})

export const fetchUser = () => (dispatch) => {
  return fetch('https://randomuser.me/api/', {
    method: 'GET',
  }).then(resp => resp.json())
    .then(json => dispatch(addUser(json.results[0])))
}

export const CLEAR_USERS = 'CLEAR_USERS'
export const clearUsers = () => ({
  type: CLEAR_USERS
})
