import React, { Component } from 'react'
import Auth from '../firebase/Auth'
import { connect } from 'react-redux'
import { getUserData } from '../reducers/actions/getUserData'
import { createNewUser } from '../reducers/actions/createNewUser'
import styles from '../sass/SignUp.module.scss'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  componentDidUpdate() {
    if(this.props.auth.isAuth) {
      this.props.history.push('/stocks');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(cred => {
      if (cred.user) {
          var data = { 
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            uid: cred.user.uid,
          };

          console.log(data);
          this.props.createNewUser(data);
          
        // this.props.login(cred.user.uid)
      }
      // Do something on the page if sign up is unsuccessful (user already exists, etc)
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
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={ this.handleChange } required />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={ this.handleChange } />
          </div>
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
    createNewUser: (data) => { dispatch(createNewUser(data)) },
    login: (uid) => { dispatch(getUserData(uid)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
