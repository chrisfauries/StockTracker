import React, { Component } from 'react'
import OverviewPie from './OverviewPie'
import OverviewList from './OverviewList'
import { connect } from 'react-redux'
import { getUserData } from '../reducers/actions/userActions'
import { sumCostTotal, sumValueTotal, getGainLossTotal, getPctTotal, getGainLossYTD, getPctYTD } from '../logic/calc.js'

class Overview extends Component {

  componentDidUpdate() {
    
    if(this.props.authFB.uid && !this.props.status) {
      this.props.getUserData(this.props.authFB.uid)
    }
  }

  componentDidMount() {
    setTimeout(
      function() {
        if (this.props.authFB.isEmpty) this.props.history.push('/')
      }
      .bind(this),
      1000
    );
  }
  
  render() {
    const loaded = this.props.received === true ? (
       <div className="row container grey lighten-5 z-depth-1">
            <div className="col s6">
                <h2 className='center-align'>Overview Stats</h2>
                <h5 className='center-align'>Portfolio Cost: { sumCostTotal(this.props) }</h5>
                <h5 className='center-align'>Portfolio Value: { sumValueTotal(this.props) }</h5>
                <h5 className='center-align'>Overall Gain/Loss: { getGainLossTotal() }</h5>
                <h5 className='center-align'>Overall % change: { getPctTotal() }</h5>
                <h5 className='center-align'>Gain/Loss YTD: { getGainLossYTD(this.props) }</h5>
                <h5 className='center-align'>% change YTD: { getPctYTD() }</h5>
            </div>
            <OverviewPie data={this.props} />
            <OverviewList data={this.props} />
        </div> 
    ) : (
        <div></div>      
    )
       return (
         <div>
         { loaded }
         </div>
        
       )
  }
}

const mapStateToProps = (state) => {
    return {
        authFB: state.firebase.auth,
        stocks: state.user.stocks,
        status: state.user.requested,
        received: state.data.isAllStockDataReceived,
        liveStockData: state.data.liveStockData,
        stocksPurchased: state.user.stocksPurchased,
        historical: state.data.historicalData,
        live: state.data.liveStockData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: (uid) => {dispatch(getUserData(uid))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
