import React, { Component } from 'react'
import Auth from '../firebase/Auth'
import { connect } from 'react-redux'
import { getUserData } from '../reducers/actions/getUserData'
import styles from '../sass/SignIn.module.scss'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  componentDidUpdate() {
    if(this.props.auth.isAuth) {
      this.props.history.push('/stocks');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(cred => {
      if (cred.user) {
        console.log(cred)
        this.props.login(cred.user.uid);
      }
      // Do something on the page with login/password is incorrect
    }).catch(err => {console.log(err.code, err.message)});
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {

    return (
      <div className= {styles.signIn}>
        <form onSubmit={ this.handleSubmit }>
          <h5>Sign In</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={ this.handleChange }/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={ this.handleChange }/>
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (uid) => { dispatch(getUserData(uid)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
