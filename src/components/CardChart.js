import React, { Component } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'

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
    const labels = []
    const stocks = this.state.stockData;
    const priceArray = []
    stocks.forEach(array => {
      array.forEach(stock => {
        priceArray.push(stock.price)
        labels.push(stock.time)
      })
    })
    
    var chartData = {
      labels: labels,
      datasets:[
        {
          label: this.props.symbol,
          data:[...priceArray],
          backgroundColor: ['rgba(173, 216, 230, 0.6']
        }
      ]
    }

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