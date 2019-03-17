import React, { Component } from 'react'
import styles from '../sass/Cards.module.scss'
import CardHeader from './CardHeader'
import CardChart from './CardChart'
import { connect } from 'react-redux'
import AddStock from './AddStock'
import Popup from 'reactjs-popup';

class Cards extends Component {
  state = {
    addStock: ''
  }
  render() { 
    const { stocks } = this.props;
    const stockList = stocks.length ? (
      stocks.map(stock => {
        return (
          <div className={ styles.card } key={ stock.symbol }>
            <CardHeader stock={ stock } />
            <CardChart symbol={ stock.symbol } />
            <span>More Details</span>
          </div>
        )
      })
    ) : (
          <div>Please Sign In to See Stocks!</div>
        )
        
    return (
      <div className={ styles.cards }>
        { stockList }
        <Popup trigger={<button> Trigger</button>} position="right center">
            <div>Enter Stock Symbol Here</div>
            <input type="text" placeholder='Stock Symbol' className={ styles.stockSymbol } maxLength='5' onChange={this.handleChange} onSubmit={ AddStock } />
        </Popup>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stocks: state.user.liveStockData
  }
}

export default connect(mapStateToProps)(Cards)
