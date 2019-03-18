import React, { Component } from 'react'
import { connect } from 'react-redux'

class Overview extends Component {
    


    render() {

        const purchased = this.props.stocksPurchased
        console.log(purchased.AAPL[0])

        const allStocks =  (
            purchased.AAPL.map(stock => {
                return (
                    <div>
                        <p>{stock.date}</p>
                        <p>{stock.price}</p>
                        <p>{stock.quantity}</p>
                    </div>
                )
            })
        ) 
        console.log(allStocks)
        return (
            <div>
                { allStocks }
            </div>

        )
    }
}

const mapStateToProps = (state) => {
  return {
    stocksPurchased: state.user.stocksPurchased
  }
}


export default connect(mapStateToProps)(Overview)