import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../reducers/actions/authActions'
import styles from '../sass/SignUp.module.scss'
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    userName: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var data = { 
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password
    };
    this.props.signUp(data);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {

    // if (this.props.authFB.uid) return ( <Redirect to='/stocks' /> )
    return (
      <div className={styles.signUp}>
      <div className={`container ${styles.container}`}>
        <form className= {`white ${styles.form}`} onSubmit={ this.handleSubmit }>
          <h3 className='grey-text text-darken-3 center'>Sign Up</h3>
          <div className='input-field container'>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={ this.handleChange } required />
          </div>
          <div className='input-field container'>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={ this.handleChange } />
          </div>
          <div className='input-field container'>
            <label htmlFor="userName">User Name</label>
            <input type="text" id="userName" onChange={ this.handleChange } />
          </div>
          <div className='input-field container'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={ this.handleChange }/>
          </div>
          <div className='input-field container'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={ this.handleChange }/>
          </div>
          <div className={ styles.btnDiv}>
            <button className='btn red lighten-1'>Create</button>
          </div>
        </form>
      </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    authFB: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (data) => { dispatch(signUp(data)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)