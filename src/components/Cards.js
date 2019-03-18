import React, { Component } from 'react'
import styles from '../sass/Cards.module.scss'
import CardHeader from './CardHeader'
import CardChart from './CardChart'
import { connect } from 'react-redux'
import AddStock from './AddStock'
import { NavLink, Redirect } from 'react-router-dom'
import DeleteStock from './DeleteStock'
import StockPurchases from './StockPurchases'
import shortid from 'shortid'


class Cards extends Component {

  render() {
    const { stocks } = this.props;
    const stockList = stocks.length ? (
      stocks.map(stock => {
        return (
          <div className="col s12 m6 l4" key={ shortid.generate() }>
            <div className='card medium green lighten-5 hoverable'>
              <div className='card-content black-text'>
                <CardHeader stock={ stock } />
                <CardChart symbol={ stock.symbol } />
                {/* <span><NavLink to={"/stocks/" + stock.symbol} symbol={ stock.symbol }>More Details</NavLink></span> */}
                <DeleteStock symbol={ stock.symbol } />
                <StockPurchases symbol={ stock.symbol } />
              </div>
            </div>
          </div>
        )
      })
    ) : (
          <div>Click the Plus Sign to add your first Stock!</div>
        )

    if (!this.props.auth) return <Redirect to='/' />
    
    return (
      <div className='row'>
        { stockList }
        <AddStock />
      </div>  
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stocks: state.user.liveStockData,
    auth: state.user.isAuth
  }
}

export default connect(mapStateToProps)(Cards)
