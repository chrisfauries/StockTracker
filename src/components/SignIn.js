import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../sass/SignIn.module.scss'
import { signIn } from '../reducers/actions/authActions'
import { Redirect } from 'react-router-dom'
import { getUserData } from '../reducers/actions/userActions'
import { relative } from 'path';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn({ email: this.state.email, password: this.state.password });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {
    let message = this.props.auth.error ? (this.props.auth.status) : ('')
    const { data } = this.props
    if (data.isAllStockDataReceived && data.isAllChartDataReceived && data.isAllHistoricalDataReceived) return ( <Redirect to='/stocks' /> )
    if (this.props.authFB.uid && !this.props.status.requested) return ( <Redirect to='/stocks' /> )
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
            <div className={ styles.error }>{ message }</div>
            <div className={styles.btnDiv}>
              <button className='btn red lighten-1 center-align'>Login</button>
            </div>
            <div className={ styles.testAccount } style= {{position: "relative"}}>
              <p style={{position: 'absolute', right: 0, left: 0, textAlign: 'center'}}>Test Account: 'example@example.com' Password: 'asdf1234'</p>
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
    authFB: state.firebase.auth,
    data: state.data,
    status: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (cred) => { dispatch(signIn(cred)) },
    getUserData: (uid) => { dispatch(getUserData(uid)) } 

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
