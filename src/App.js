import React, { Component } from 'react';
import styles from './sass/App.module.scss'
import Cards from './components/Cards'
import NavBar from './components/NavBar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StockPurchases from './components/StockPurchases'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={ styles.app }>
          <NavBar />
          <Switch>
            <Route exact path='/' component={ SignIn } />
            <Route path='/stocks' component={ Cards } />
            <Route path='/signup' component={ SignUp } />
            <Route path='/:stock_symbol' component={ StockPurchases } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
