import React from 'react'
import R from 'ramda'
import { connect } from 'react-redux'
import { getPizzaState, getPizzaCost, getFocus } from '../selectors'
import { togglePizzaTopping, changePizzaSize, changeFocus } from '../actions'
import { Link } from 'react-router'
import classnames from 'classnames'

const stateToProps = (state) => {
  const pizzaState = getPizzaState(state)
  R.assoc('totalCost', getPizzaCost(state), pizzaState)
  return {
    visible: getFocus(state) === 'all' || getFocus(state) === 'pizza',
    focused: getFocus(state) === 'pizza',
    totalCost: getPizzaCost(state),
    ...pizzaState
  }
}

const dispatchProps = {
  togglePizzaTopping,
  changePizzaSize,
  changeFocus,
}

const Pizza = ({
  toppings: {
    beef, pepporoni, olives,
  },
  size,
  totalCost,
  togglePizzaTopping,
  changePizzaSize,
  changeFocus,
  focused,
  visible,
}) => {

  const classes = classnames('notification', 'is-warning', {
    visible,
    focused,
  })

  return (
    <div style={{ top:'0', left:'50%' }} className={classes}>
      <a onClick={() => changeFocus('pizza')} > <h1 className='title'> Order a Pizza! </h1> </a>
      <hr/>
      <p className="control">
        <label className="radio">
          <input type="radio" checked={size === 'small'} value='small'
            onChange={() => changePizzaSize('small')} />
          Small ($10)
        </label>
        <label className="radio">
          <input type="radio" checked={size === 'medium'} value="medium"
            onChange={() => changePizzaSize('medium')} />
          Medium ($15)
        </label>
        <label className="radio">
          <input type="radio" checked={size === 'large'} value='large'
            onChange={() => changePizzaSize('large')} />
          Large ($20)
        </label>
      </p>

      <p className="control">
        <label className="checkbox">
          <input onChange={() => togglePizzaTopping('beef')} checked={beef} type="checkbox"/>
          Beef $3
        </label>
      </p>

      <p className="control">
        <label className="checkbox">
          <input onChange={() => togglePizzaTopping('pepporoni')} checked={pepporoni} type="checkbox"/>
          Pepporoni $2
        </label>
      </p>

      <p className="control">
        <label className="checkbox">
          <input onChange={() => togglePizzaTopping('olives')} checked={olives} type="checkbox"/>
          Olives $1
        </label>
      </p>

      <h2 className="subtitle"> Total: ${totalCost} </h2>


    </div>
  )}
export default connect(stateToProps, dispatchProps)(Pizza)
