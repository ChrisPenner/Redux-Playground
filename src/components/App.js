import React from 'react'
import { Provider, connect } from 'react-redux'
import store from '../store'

import Colors from './Colors'
import Pizza from './Pizza'
import Api from './Api'
import Bars from './Bars'

const stateToProps = (state) => ({
  focus: state.focus,
})
const Focus = connect(stateToProps)(({focus})=> (
  <div className="main">
      <Colors/>
      <Pizza/>
      <Api/>
      <Bars/>
  </div>
))

const App = () => (
  <Provider store={store}>
    <div className="App section">
      <Focus />
    </div>
  </Provider>
)

export default App;
