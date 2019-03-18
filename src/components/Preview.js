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
            {"price": "270.20","change_pct": "-1.90","day_change": "-5.23","symbol": "TSLA","name": "Tesla Inc"},
            {"price": "1025.75","change_pct": "-3.75","day_change": "-15.95","symbol": "FB","name": "Facebook Inc"},
            {"price": "1652.36","change_pct": "2.23","day_change": "16.57","symbol": "AMZN","name": "Amazon"}
        ],
    }
    render() {
    const { stocks } = this.state;
    const stockList = stocks.map(stock => {
        return (
            <div className="col s12 m4">
                <div className='card medium green lighten-5 hoverable' key={ shortid.generate() }>
                    <div className='card-content black-text'>
                    <CardHeader stock={ stock } />
                    <ChartPreview symbol={ stock.symbol } />
                    {/* <span><NavLink to={"/stocks/" + stock.symbol} symbol={ stock.symbol }>More Details</NavLink></span> */}
                    </div>
                </div>
            </div>
        )
      })
    return (
        <div className='row'>
            { stockList }
        </div>   
    )
  }
}

export default Preview
