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
import { RingLoader } from 'react-spinners'
import { connect } from 'react-redux'

let status;

class App extends Component {

  componentDidUpdate() {
    (status) ? (this.refs.Overlay.style.display = 'block') : (this.refs.Overlay.style.display = 'none');
    (status) ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'visible');
  }

  render() {
    const { data } = this.props
    status = (!data.isAllStockDataReceived || 
                 !data.isAllChartDataReceived 
                // ||  !data.isAllHistoricalDataReceived
                 ) && this.props.user.requested
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
          <div className= {styles.loadingOverlay} ref='Overlay'> 
            <div className= {styles.loading}>
              <RingLoader sizeUnit={"px"} size={150} color={'#FFFFFF'} loading={ status }/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
