import React, { Component } from 'react'
import styles from '../sass/Cards.module.scss'
//import axios from 'axios'
import Data from '../data/stocks.json'
import CardHeader from './CardHeader'
import CardChart from './CardChart'

class Cards extends Component {
  state = {
    stocks: Data.data
  }
  // componentDidMount(){
  //   axios.get('https://www.worldtradingdata.com/api/v1/stock?symbol=AAPL,MSFT,TSLA,FB,AMZN&api_token=IV3CGU3bazdQHddnDWSufxtrvEHJGLsMG9KqretAXxGe3Q27dVbP5EScDF87')
  //     .then(res => {
  //       this.setState({
  //         stocks: res.data.data
  //       })
  //     })

  // }
  render() { 
    const { stocks } = this.state;
    const stockList = stocks.length ? (
      stocks.map(stock => {
        return (
          <div className={ styles.card } key={ stock.symbol }>
          <CardHeader stock={ stock } />
          <CardChart stock={ stock } />
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
