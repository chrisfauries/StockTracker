import React, { Component } from 'react'
import styles from '../sass/NavBar.module.scss'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends Component {
  handleClick = () => {
    this.props.signOut();
  }

  render() {
    const links = this.props.auth ? (
      <ul>
          <li><NavLink to="/stocks">Stocks</NavLink></li>
          <li><NavLink to="/overview">Overview</NavLink></li>
          <li><NavLink to="/" onClick= { this.handleClick }>Sign Out</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
      </ul>
    ) : (
      <ul>
          <li><NavLink to="/">Sign In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
          <li><NavLink to="/preview">Preview</NavLink></li>
      </ul>
    )

    return (
      <div className= { styles.navWrap }>
        <div className= { styles.container }>
            <h1 className= { styles.header }>Stock Tracker</h1>
            { links }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.user.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => { dispatch({ type:'LOGOUT_USER'})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

