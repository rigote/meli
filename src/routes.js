import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Details from './pages/Details'
import Search from './pages/Search'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/item/:id" exact component={Details} />
      <Route path="/search/:term" component={Search} />
    </Switch>
  )
}
