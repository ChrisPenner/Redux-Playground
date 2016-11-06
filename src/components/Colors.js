import React from 'react'
import R from 'ramda'
import { connect } from 'react-redux'
import { changeColor, changeFocus } from '../actions'
import { getHue, getFocus } from '../selectors'
import classnames from 'classnames'

const stateToProps = (state) => ({
  hue: getHue(state),
  visible: getFocus(state) === 'all' || getFocus(state) === 'colors',
  focused: getFocus(state) === 'colors',
})

const dispatchProps = {
  changeColor,
  changeFocus,
}

const Colors = ({hue, changeColor, focused, visible, changeFocus}) => {
  const style = {
    background: `hsl(${hue}, 100%, 50%)`,
    color: `hsl(${hue - 180}, 100%, 60%)`,
    top: '0',
    left: '0',
  }

  const classes = classnames('notification', {
    visible,
    focused,
  })

  return (
    <div className={classes} style={style}>
      <a onClick={() => changeFocus('colors')}> <h1 className='title'> Colors </h1> </a>
      <br/>
      <label>
        <input
          className="slider"
          value={hue}
          onChange={(e) => changeColor(e.target.value)}
          type='range' step='15' min='0' max='360' />
      </label>
    </div>
  )
}

export default connect(stateToProps, dispatchProps)(Colors)
