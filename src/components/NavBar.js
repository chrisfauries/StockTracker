import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styles from '../sass/NavBar.module.scss'
import { signOut } from '../reducers/actions/authActions'


class NavBar extends Component {
  handleSignOut = () => {
    this.props.signOut();
    setTimeout(
      function() {
        this.props.history.push('/')
      }
      .bind(this),
      300
    );  
  }

  handleHamburgerClick = () => {
    var navBar = document.getElementById('navMenu');
    if(navBar.classList.contains(styles['expand'])) {
      navBar.classList.remove(styles['expand']);
    } else {
      navBar.classList.add(styles['expand']);
    }
  } 


  handleActive = (e) => { 
    var navBtns = e.target.parentElement.parentElement.querySelectorAll('li');
    navBtns.forEach(btn => btn.classList.remove('active'));
    if(e.target.innerHTML !== 'Sign Out') {
      e.target.parentElement.classList.add('active');
    }
  }

  render() {
    console.log(window)
    const links = !this.props.authFB.isEmpty ? (
      <div className={styles.menu} onClick={ this.handleActive }>
      <NavLink to='/stocks' className='brand-logo'>Stock Tracker</NavLink>
      <i onClick={ this.handleHamburgerClick } class={`material-icons`}>menu</i>
      <ul className='right'>
          <li className='active'><NavLink to="/stocks">Stocks</NavLink></li>
          <li><NavLink to="/overview">Overview</NavLink></li>
          <li><NavLink to="/settings/main">Settings</NavLink></li>
          <li><NavLink to="/" onClick= { this.handleSignOut }>Sign Out</NavLink></li>
      </ul>
      </div>
    ) : (
      <div className={styles.menu} onClick={ this.handleActive }>
        <NavLink to='/' className='brand-logo'>Stock Tracker</NavLink>
        <i onClick={ this.handleHamburgerClick } class={`material-icons`}>menu</i>
        <ul className='right'>
          <li className='active'><NavLink to="/">Sign In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
          <li><NavLink to="/preview">Preview</NavLink></li>
        </ul>
      </div>
    )

    return (
      <div id='navMenu' className={`${styles.fixedSpacer}`} >
        <nav className={`nav-wrapper green lighten-1 ${styles.nav}`}>
          <div className='container'>
              { links }
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.isAuth,
    authFB: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => { dispatch(signOut({ type:'SIGNOUT_USER'}))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar))

