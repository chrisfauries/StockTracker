import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../sass/Settings.module.scss'
import General from './General'
import Chart from './Chart'
import Layout from './Layout'
import Other from './Other'
import { connect } from 'react-redux'
import { getUserData } from '../../reducers/actions/userActions'

class Settings extends Component {

  componentDidUpdate() {
    if(this.props.authFB.uid && !this.props.status) {
      this.props.getUserData(this.props.authFB.uid)
    }
  }


  render() {
    var settingsMenus;
    
    switch(this.props.match.params.sub_menu){
          case 'main':
            settingsMenus= ( 
              <div>
              <Link to='/settings/general' className="collection-item center-align">General</Link>
            <Link to="/settings/chart" className="collection-item center-align">Chart</Link>
            <Link to="/settings/layout" className="collection-item center-align">Layout</Link>
            <Link to="/settings/other" className="collection-item center-align">Other</Link>

              </div>
)
            break;
          case 'general':
          settingsMenus = (<General />)
            break;
          case 'chart':
          settingsMenus = (<Chart />)
            break;
          case 'layout':
          settingsMenus = (<Layout />)
            break;
          case 'other':
          settingsMenus = (<Other />)
            break;
          default:
          settingsMenus= (  <div></div> )         
        }
    return (
      <div>
        <h3 className='center-align'>Settings</h3>
        <div className={`collection container ${styles.menu}`}>
          { settingsMenus }
      </div>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
      authFB: state.firebase.auth,
      status: state.user.requested,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getUserData: (uid) => {dispatch(getUserData(uid))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
