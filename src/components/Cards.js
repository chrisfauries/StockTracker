import React, { Component } from 'react'
import styles from '../sass/Cards.module.scss'
import CardHeader from './CardHeader'
import CardChart from './CardChart'
import { connect } from 'react-redux'
import AddStock from './AddStock'
import trashcan from '../img/trash.png'
import Overview from './Overview'
import { NavLink } from 'react-router-dom'

class Cards extends Component {

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() { 
    const { stocks } = this.props;
    const stockList = stocks.length ? (
      stocks.map(stock => {
        return (
          <div className={ styles.card } key={ stock.symbol }>
            <CardHeader stock={ stock } />
            <CardChart symbol={ stock.symbol } />
            <span><NavLink to={"/" + stock.symbol}>More Details</NavLink></span>
            <div>
              <img src={ trashcan } />
            </div>
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
