import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../sass/Settings.module.scss'

class Settings extends Component {
  render() {
    return (
      <div>
        <h3 className='center-align'>Settings</h3>
        <div className={`collection container ${styles.menu}`}>
          <Link to='/settings/general' className="collection-item center-align">General</Link>
          <Link to="/settings/chart" className="collection-item center-align">Chart</Link>
          <Link to="/settings/layout" className="collection-item center-align">Layout</Link>
          <Link to="/settings/other" className="collection-item center-align">Other</Link>
      </div>
      </div>
      
    )
  }
}

export default Settings
