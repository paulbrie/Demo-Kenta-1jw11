import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './teleporthq/style.module.css'
import Home from './teleporthq/pages/home'
import CustomPage from './pages/index'
import Menu from './components/menu'

const App = () => {
  return (
    <Router>
        <Menu />
      <Route exact component={Home} path="/" />
        <Route exact component={CustomPage} path="/custom" />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
