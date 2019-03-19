import React, { Component } from 'react'
import OverviewPie from './OverviewPie'
import OverviewList from './OverviewList'
import { connect } from 'react-redux'
import { sumCost, sumValue, getGainLoss, getPct } from '../logic/calc.js'


class Overview extends Component {

  render() {
    return (
       <div className="row container">
            <div className="col grey lighten-5 s6">
                <h2 className='center-align'>Overview Stats</h2>
                <h5 className='center-align'>Portfolio Cost: { sumCost(this.props) }</h5>
                <h5 className='center-align'>Portfolio Value: { sumValue(this.props) }</h5>
                <h5 className='center-align'>Gain/Loss: { getGainLoss() }</h5>
                <h5 className='center-align'>Pct: { getPct() }</h5>
            </div>
            <OverviewPie data={this.props} />
            <OverviewList data={this.props} />
        </div>    
    )
  }
}

const mapStateToProps = (state) => {
    return {
        stocks: state.user.stocks,
        liveStockData: state.user.liveStockData,
        stocksPurchased: state.user.stocksPurchased
    }
}


export default connect(mapStateToProps)(Overview)
