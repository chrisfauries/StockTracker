import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'

class CardChartToday extends Component {
 
  
  render() {

  
    const { timeFrame } = this.props
    
    const { symbol } = this.props
    var stocks = this.props.liveChartData.find(stock =>  stock[symbol])
    const labels = [];
    const priceArray = [];
    if(stocks !== undefined) {
      stocks[symbol].forEach(stock => {
          priceArray.push(stock.price)
          labels.push(stock.time)
    })

    var times = [];

    labels.map(label => {
      var splitString = label.split(":")
      if (splitString[0] > 12){
        times.push((splitString[0]-12) + ":" + splitString[1])
      }
      else{
        times.push(label)
      }
    
    
 })

    var chartData = {
      labels: times,
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
  
export default connect(mapStateToProps)(CardChartToday)