import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import General from './General'
import Chart from './Chart'
import Layout from './Layout'
import Other from './Other'

class SubMenu extends Component {

  render() {
      return (
        <BrowserRouter>
          <div>
            <Route exact path="/settings/general" component={ General } />
            <Route exact path="/settings/chart" component={ Chart } />
            <Route exact path="/settings/layout" component={ Layout } />
            <Route exact path="/settings/other" component={ Other } />
          </div>
        </BrowserRouter>
      )
  }
}

export default SubMenu
