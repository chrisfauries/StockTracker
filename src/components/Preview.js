import React, { Component } from 'react'
import styles from '../sass/Preview.module.scss'
import CardHeader from './CardHeader'
import ChartPreview from './ChartPreview'
// import { NavLink } from 'react-router-dom'
import shortid from 'shortid'


class Preview extends Component {

    state = {
        stocks: [
            {"price": "1185.49","change_pct": "0.09","day_change": "1.03","symbol": "GOOG","name": "Alphabet Inc Class C"},
            {"day_change": "1.82","symbol": "AAPL","name": "Apple Inc.","price": "187.94","change_pct": "0.98"},
            {"price": "270.20","change_pct": "-1.90","day_change": "-5.23","symbol": "TSLA","name": "Tesla Inc"}
        ],
    }
    render() {
    const { stocks } = this.state;
    const stockList = stocks.map(stock => {
        return (
          <div className={ styles.card } key={ shortid.generate() }>
            <CardHeader stock={ stock } />
            <ChartPreview symbol={ stock.symbol } />
            {/* <span><NavLink to={"/stocks/" + stock.symbol} symbol={ stock.symbol }>More Details</NavLink></span> */}
          </div>
        )
      })
    return (
      <div className={ styles.cards }>
        { stockList }
      </div>   
    )
  }
}

export default Preview
