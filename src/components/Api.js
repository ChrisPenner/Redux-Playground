import React from 'react'
import { connect } from 'react-redux'
import { changeFocus }  from '../actions'
import { getFocus } from '../selectors'
import classnames from 'classnames'

const stateToProps = (state) => {
  return {
    visible: getFocus(state) === 'all' || getFocus(state) === 'api',
    focused: getFocus(state) === 'api',
  }
}

const dispatchProps = {
  changeFocus
}

const Api = ({focused, visible, changeFocus}) => {
  const classes = classnames('notification', 'is-danger', {
    visible,
    focused,
  })

  return (
    <div style={{ top:'50%', left:'0' }} className={classes} >
      <a onClick={() => changeFocus('api')}><h1 className="title"> API </h1></a>
    </div>
)}
export default connect(stateToProps, dispatchProps)(Api)
