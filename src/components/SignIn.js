import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../sass/SignIn.module.scss'
import { signIn } from '../reducers/actions/authActions'
import { NavLink, Redirect } from 'react-router-dom'
import { getUserData } from '../reducers/actions/userActions'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn({ email: this.state.email, password: this.state.password });
    this.props.history.push('/stocks');
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {
    if (this.props.authFB.uid) return ( <Redirect to='/stocks' /> )
    
    return (
      <div className={styles.signIn}>
        <div className={`container ${styles.container}`}>
          <form className={`white ${styles.form}`} onSubmit={ this.handleSubmit }>
            <h3 className='grey-text text-darken-3 center'>Sign In</h3>
            <div className='input-field container'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={ this.handleChange }/>
            </div>
            <div className='input-field container'>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={ this.handleChange }/>
            </div>
            <div className={styles.btnDiv}>
              <button className='btn red lighten-1 center-align'>Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    state: state,
    auth: state.auth,
    authFB: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (cred) => { dispatch(signIn(cred)) },
    getUserData: (uid) => { dispatch(getUserData(uid)) } 

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
