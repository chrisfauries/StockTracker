import React, { Component } from 'react'
import styles from '../sass/Cards.module.scss'
import axios from 'axios'
import CardHeader from './CardHeader'
import CardChart from './CardChart'

class Cards extends Component {
  state = {
    stockList: ['AAPL', 'FB', 'GOOG', 'TSLA', 'AMZN'],
    stocks: []
  }

  comp
  componentWillMount(){
    this.state.stockList.map(stock => {
      axios.get('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabStockData?stock=' + stock)
      .then(res => {
       return (
        this.setState({
          stocks: [...this.state.stocks, res.data]
        })
       )
      })
    })


  }
  render() { 
    const { stocks } = this.state;
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
          <div>Buy more stocks!!!</div>
        )
        
    return (
      <div className={ styles.cards }>
        { stockList }
        </div>
    )
  }
  
}

export default Cards
