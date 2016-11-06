import R from 'ramda'

export const getHue = (state) => state.colors.hue
export const getPizzaState = (state) => state.pizza

const toppingCosts = {
  olives: 1,
  pepporoni: 2,
  beef: 3,
}

const sizeCosts = {
  small: 10,
  medium: 15,
  large: 20,
}

export const getPizzaCost = (state) => {
  const {toppings, size } = getPizzaState(state)

  const selectedToppings = R.compose(
    R.keys,
    R.filter(R.identity),
  )

  const toppingsCost = R.compose(
    R.sum,
    R.map(topping => toppingCosts[topping]),
    selectedToppings,
  )

  return toppingsCost(toppings) + sizeCosts[size]
}

export const getFocus = state => state.focus
export const getUsers = state => state.api
