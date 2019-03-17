import React, { Component } from 'react';
import styles from './sass/App.module.scss'
import Cards from './components/Cards'
import NavBar from './components/NavBar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={ styles.app }>
          <NavBar />
          <Route exact path='/' component={ SignIn } />
          <Route path='/stocks' component={ Cards } />
          <Route path='/signup' component={ SignUp } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
