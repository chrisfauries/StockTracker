import React, { Component } from 'react';
import styles from './sass/App.module.scss'
import Cards from './components/Cards'
import NavBar from './components/NavBar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Preview from './components/Preview'
import Overview from './components/Overview'
import Settings from './components/settings/Settings'
import SubMenu from './components/settings/SubMenu'
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
            <Route exact path='/stocks' component={ Cards } />
            <Route path='/signup' component={ SignUp } />
            <Route path='/preview' component={ Preview } />
            <Route path='/overview' component={ Overview } />
            <Route exact path="/settings" component={ Settings } />
            <Route path='/settings/:sub_menu' component={ SubMenu } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
