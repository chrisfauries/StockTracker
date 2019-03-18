import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'

class CardChart extends Component {
  
  render() {

    const { symbol } = this.props
    var stocks = this.props.liveChartData.find(stock =>  stock[symbol])
    
    const labels = [];
    const priceArray = [];
    if(stocks !== undefined) {
    stocks[symbol].forEach(stock => {
        priceArray.push(stock.price)
        labels.push(stock.time)
    })

    var chartData = {
      labels: labels,
      datasets:[
        {
          label: symbol,
          data:[...priceArray],
          backgroundColor: ['rgba(173, 216, 230, 0.6']
        }
      ]
    }
  }

    const post = stocks !== undefined ? (
      <Line
          key= { symbol }
          data={chartData}
          width={100}
          height={50}
          options={{}}
        />
    ): (
      <div>Loading chart...</div>
    )
    console.log(stocks);
    
    return (
      <div>
        { post }
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