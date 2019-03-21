import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserData } from '../reducers/actions/getUserData'
import { createNewUser } from '../reducers/actions/createNewUser'
import styles from '../sass/SignUp.module.scss'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    userName: ''
  }

  // componentDidUpdate() {
  //   if(!this.props.authFB.isEmpty) {
  //     this.props.history.push('/stocks');
  //   }
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    // Auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(cred => {
    //   if (cred.user) {
    //       var data = { 
    //         firstName: this.state.firstName,
    //         lastName: this.state.lastName,
    //         userName: this.state.userName,
    //         email: this.state.email,
    //         uid: cred.user.uid,
    //       };
    //       this.props.createNewUser(data);
    //   }
      // Do something on the page if sign up is unsuccessful (user already exists, etc)
    // }).catch(err => {console.log(err.code, err.message)});
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {
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
    createNewUser: (data) => { dispatch(createNewUser(data)) },
    login: (uid) => { dispatch(getUserData(uid)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)