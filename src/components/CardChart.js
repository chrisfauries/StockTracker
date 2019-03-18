import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'

class CardChart extends Component {
  
  render() {
    console.log(this.props.liveChartData)
    const labels = [];
    const stocks = this.state.stockData;
    const priceArray = [];
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
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    liveChartData: state.user.liveChartData
  }
}
  
export default connect(mapStateToProps)(CardChart)