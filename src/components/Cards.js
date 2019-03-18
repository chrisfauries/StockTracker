import React, { Component } from 'react'
import styles from '../sass/Cards.module.scss'
import CardHeader from './CardHeader'
import CardChart from './CardChart'
import { connect } from 'react-redux'
import AddStock from './AddStock'
import DeleteStock from './DeleteStock'
import shortid from 'shortid'

class Cards extends Component {

  render() {
    const { stocks } = this.props;
    const stockList = stocks.length ? (
      stocks.map(stock => {
        return (
          <div className={ styles.card } key={ shortid.generate() }>
            <CardHeader stock={ stock } />
            <CardChart symbol={ stock.symbol } />
            <span>More Details</span>
            <DeleteStock symbol={ stock.symbol } />
          </div>
        )
      })
    ) : (
          <div>Please Sign In to See Stocks!</div>
        )
    return (
      <div className={ styles.cards }>
        { stockList }
        <AddStock />
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
