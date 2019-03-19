import React, { Component } from 'react'
import OverviewPie from './OverviewPie'
import { connect } from 'react-redux'
import { sumCost, sumValue, getGainLoss, getPct } from '../logic/calc.js'


class Overview extends Component {
    state = {

    }

  render() {
    return (
       <div className="row container">
            <div className="col grey lighten-5 s6">
                <p>Overview Stats</p>
                <p>Portfolio Cost: { sumCost(this.props) }</p>
                <p>Portfolio Value: { sumValue(this.props) }</p>
                <p>Gain/Loss: { getGainLoss() }</p>
                <p>Pct: { getPct() }</p>
            </div>
            <OverviewPie data={this.props} />
            <div className="col green s12"><p>List all Purchases and Run Gains and Loses</p></div>
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
