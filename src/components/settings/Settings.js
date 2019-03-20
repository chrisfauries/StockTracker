import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Settings extends Component {
  render() {
    return (
      <div className="collection container">
        <Link to='/settings/general' className="collection-item center-align">General</Link>
        <Link to="/settings/chart" className="collection-item center-align">Chart</Link>
        <Link to="/settings/layout" className="collection-item center-align">Layout</Link>
        <Link to="/settings/other" className="collection-item center-align">Other</Link>
      </div>
    )
  }
}

export default Settings
