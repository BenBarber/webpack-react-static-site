import React, { Component, PropTypes } from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import About from './containers/About'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute name="home" component={Home} />
    <Route path='/about' name="about" component={About} />
  </Route>
)

export default routes