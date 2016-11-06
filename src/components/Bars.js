import React from 'react'
import { connect } from 'react-redux'
import { getPizzaCost, getHue, getFocus } from '../selectors'
import { changeFocus } from '../actions'
import classnames from 'classnames'

const stateToProps = (state) => {
  return {
    cost: getPizzaCost(state),
    hue: getHue(state),
    visible: getFocus(state) === 'all' || getFocus(state) === 'charts',
    focused: getFocus(state) === 'charts',
  }
}

const dispatchProps = {
  changeFocus,
}

const Bars = ({cost, hue, focused, visible, changeFocus}) => {
  const style = {
    width: `${cost * 3}%`,
    background: `hsl(${hue}, 100%, 50%)`,
    height: '20px',
    transition: 'width 0.5s ease-in-out',
  }

  const classes = classnames('notification', 'is-success', {
    visible,
    focused,
  })

  return (
    <div style={{ top:'50%', left:'50%' }} className={classes}>
      <a onClick={() => changeFocus('charts')}> <h1 className='title'> Charts </h1> </a>
      <div style={style}>
      </div>
    </div>
  )
}

export default connect(stateToProps, dispatchProps)(Bars)
