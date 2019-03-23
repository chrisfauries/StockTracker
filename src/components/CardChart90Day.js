import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'

class CardChart90Day extends Component {
  
  render() {
    
    const { symbol } = this.props
    var stocks = this.props.historicalData.find(stock =>  stock[symbol])
    const labelsAll = [];
    const priceArrayAll = [];
    if(stocks !== undefined) {
      stocks[symbol].forEach(stock => {
          priceArrayAll.push(stock.price)
          labelsAll.push(stock.date)
    })
    
    const labels = labelsAll.slice(0, 90)
    const priceArray = priceArrayAll.slice(0, 90)
    priceArray.reverse()
    labels.reverse()

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

  const options = {
    maintainAspectRatio: false,
    legend:{
      display: false
    }, 
    tooltips:{ 
      displayColors: false,
      enabled:true, 
      bodyFontSize: 24, 
      callbacks:{ 
        title: function(tooltipItems) { return ''; },
        label: function(tooltipItems) { return  '$' + tooltipItems.value; }
      }
    }
  }

    const post = stocks !== undefined ? (
      <Line
          key= { symbol }
          data={chartData}
          width={100}
          height={225}
          options={ options }
        />
    ): (
      <div></div>
    )
    
    return (
      <div className='activator'>
        { post }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    liveChartData: state.data.liveChartData,
    historicalData: state.data.historicalData
  }
}
  
export default connect(mapStateToProps)(CardChart90Day)