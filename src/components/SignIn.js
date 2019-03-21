import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserData } from '../reducers/actions/getUserData'
import styles from '../sass/SignIn.module.scss'
import { signIn } from '../reducers/actions/authActions'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  componentDidUpdate() {
    console.log(this.props)
    if(!this.props.authFB.isEmpty) {
      // this.props.signIn(this.props.authFB.uid); <== need to do something differently if sign in is persistant.
      this.props.history.push('/stocks');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn({ email: this.state.email, password: this.state.password })
  }
    // Auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(cred => {
    //   if (cred.user) {
    //     this.props.login(cred.user.uid);
  //     }
  //     // Do something on the page with login/password is incorrect
  //   }).catch(err => {console.log(err.code, err.message)});
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {
    console.log(this.props.state)
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
    signIn: (cred) => { dispatch(signIn(cred)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
