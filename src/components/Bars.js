import React from 'react'
import { connect } from 'react-redux'
import { getPizzaCost, getHue, getFocus, getUsers } from '../selectors'
import { changeFocus } from '../actions'
import classnames from 'classnames'

const stateToProps = (state) => {
  return {
    cost: getPizzaCost(state),
    hue: getHue(state),
    visible: getFocus(state) === 'all' || getFocus(state) === 'charts',
    focused: getFocus(state) === 'charts',
    numUsers: getUsers(state).length,
  }
}

const dispatchProps = {
  changeFocus,
}

const Bars = ({cost, hue, focused, visible, changeFocus, numUsers}) => {
  const hueStyle = {
    width: `${(+hue)/3.6}%`,
    background: `hsl(${(+hue + 100) % 360}, 100%, 50%)`,
    height: '20px',
    transition: 'width 0.5s ease-in-out',
  }

  const pizzaStyle = {
    width: `${(cost - 9) * 5}%`,
    background: `hsl(${hue}, 100%, 50%)`,
    height: '20px',
    transition: 'width 0.5s ease-in-out',
  }

  const numUsersStyle = {
    width: `${(numUsers * 100)/5}%`,
    background: `hsl(${(+hue + 180) % 360}, 100%, 50%)`,
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
      <hr/>
      <div className="charts">
        <h2 className="title"> Pizza Cost <div style={pizzaStyle}> </div></h2>
        <h2 className="title"> Number of Users: <div style={numUsersStyle}> </div></h2>
        <h2 className="title"> Hue: <div style={hueStyle}> </div></h2>
      </div>
    </div>
  )
}

export default connect(stateToProps, dispatchProps)(Bars)
