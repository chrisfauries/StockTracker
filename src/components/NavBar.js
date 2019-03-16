import React from 'react'
import styles from '../sass/NavBar.module.scss'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div className= { styles.navWrap }>
      <div className= { styles.container }>
          <h1 className= { styles.header }>Stock Tracker</h1>
          <ul>
              <li><NavLink to="/stocks">Stocks</NavLink></li>
              <li><NavLink to="/overview">Overview</NavLink></li>
              <li><NavLink to="/">Sign Out</NavLink></li>
              <li><NavLink to="/settings">Settings</NavLink></li>
          </ul>
      </div>
    </div>
  )
}



export default NavBar

