import React from 'react'
import { connect } from 'react-redux'
import { changeFocus, fetchUser, clearUsers }  from '../actions'
import { getFocus, getUsers} from '../selectors'
import classnames from 'classnames'

const stateToProps = (state) => {
  return {
    visible: getFocus(state) === 'all' || getFocus(state) === 'api',
    focused: getFocus(state) === 'api',
    users: getUsers(state),
  }
}

const dispatchProps = {
  changeFocus,
  fetchUser,
  clearUsers,
}

const User = ({user}) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-32x32">
              <img src={user.picture.thumbnail} alt="Thumbnail"/>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-5">{`${user.name.first} ${user.name.last}`} </p>
            <p className="subtitle is-6">{user.email}</p>
          </div>
        </div>
      </div>
      </div>
)
}

const Api = ({focused, visible, changeFocus, fetchUser, clearUsers, users}) => {
  const classes = classnames('notification', 'is-danger', {
    visible,
    focused,
  })

  return (
    <div style={{ top:'50%', left:'0' }} className={classes} >
      <h1 className="title level">
        <a onClick={() => changeFocus('api')}>API</a>
        <button onClick={() => fetchUser()} className='button is-info'> Load User </button>
        <button onClick={() => clearUsers()} className='button is-warning'> Clear Users </button>
      </h1>
      <hr/>
      <div className="api-results">
        {
          users.map(user => <User key={user.email} user={user} />)
        }
      </div>
    </div>
)}
export default connect(stateToProps, dispatchProps)(Api)
