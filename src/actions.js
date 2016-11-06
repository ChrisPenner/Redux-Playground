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


export const LOCATION_CHANGE = 'LOCATION_CHANGE'
export const changeLocation = (loc) => {
debugger
return ({
  type: LOCATION_CHANGE,
  payload: loc,
})
}

export const CHANGE_FOCUS = 'CHANGE_FOCUS'
export const changeFocus = (focus) => ({
  type: CHANGE_FOCUS,
  payload: focus,
})
