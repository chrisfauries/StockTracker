import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Auth from '../firebase/Auth'


class NavBar extends Component {
  handleClick = () => {
    Auth.signOut().then(()=>console.log('User Signed Out')).catch(err => console.log(err));
    this.props.signOut();
  }

  render() {
    const links = this.props.auth ? (
      <div>
      <NavLink to='/stocks' className='brand-logo'>Stock Tracker</NavLink>
      <ul className='right'>
          <li><NavLink to="/stocks">Stocks</NavLink></li>
          <li><NavLink to="/overview">Overview</NavLink></li>
          <li><NavLink to="/" onClick= { this.handleClick }>Sign Out</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
      </ul>
      </div>
    ) : (
      <div>
        <NavLink to='/' className='brand-logo'>Stock Tracker</NavLink>
        <ul className='right'>
          <li><NavLink to="/">Sign In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
          <li><NavLink to="/preview">Preview</NavLink></li>
        </ul>
      </div>
    )

    return (
      <nav className='nav-wrapper grey lighten-1'>
        <div className='container'>
            { links }
        </div>
      </nav>
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

