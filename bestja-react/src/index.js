import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Store from './views/store'
import ComingSoon from './views/coming-soon'
import Store1 from './views/store1'
import Profile from './views/profile'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Store} path="/store" />
        <Route exact component={ComingSoon} path="/coming-soon" />
        <Route exact component={Store1} path="/store1" />
        <Route exact component={Profile} path="/profile" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
