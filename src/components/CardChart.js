import React, { Component } from 'react'
import axios from 'axios'
import {Bar, Line, Pie} from 'react-chartjs-2'

class CardChart extends Component {
  state = {
    stockData: []
  }
  
  componentWillMount(){
      const { symbol } = this.props
      axios.get('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabInterDay?stock=' + symbol)
      .then(res => {
       return (
        this.setState({
          stockData: [res.data]
        })
       )
      })
    }

  render() {
    
    const stocks = this.state.stockData;
    const priceArray = []
    stocks.forEach(array => {
      array.forEach(stock => {
        priceArray.push(stock.price)
      })
    })
     
    var chartData = {
      labels: ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00'],
      datasets:[
        {
          label:'Stock ',
          data:[...priceArray]
        }
      ]
    }
    console.log(priceArray)
    console.log(stocks)
    const post = this.state.stockData ? (
      <Line
          data={chartData}
          width={100}
          height={50}
          options={{}}
        />
    ): (
      <div>Loading chart...</div>
    )
    return (
      <div>
        { post }
      </div>
    )
  }
}

export default CardChart

