import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class StockPurchases extends Component {
    


    render() {

        const purchased = this.props.stocksPurchased
        const symbol = this.props.symbol
        const allStocks =  purchased[symbol] ? (
            purchased[symbol].map(stock => {
                return (
                    <div key={ stock.id }>
                        <span className="card-title">{ stock.symbol }</span>
                        <p>{ stock.date }</p>
                        <p>{ stock.price }</p>
                        <p>{ stock.quantity }</p>
                    </div>
                )
            })
        ) :
        (
            <div>You don't own any {symbol} stock yet, go buy more!!!</div>
        )
        
        if (!this.props.auth) return <Redirect to='/' />
        return (
            <div className='card-reveal'>
                { allStocks }
            </div>

        )
    }
}

const mapStateToProps = (state) => {
  return {
    stocksPurchased: state.user.stocksPurchased,
    auth: state.user.isAuth
  }
}


export default connect(mapStateToProps)(StockPurchases)