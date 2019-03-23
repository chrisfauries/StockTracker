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

    // console.log(labels[50] - 12)

    var chartData = {
      labels: times,
      datasets:[
        {
          label: symbol,
          data:[...priceArray],
          backgroundColor: this.props.lineSettings.colorFill,
          pointRadius: this.props.lineSettings.point,
          pointHitRadius: 4,
          borderColor: this.props.lineSettings.colorLine
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
      enabled: this.props.lineSettings.tooltipsEnabled, 
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
      <div className='center-align black-text' style={{paddingTop: '80px'}}>No Chart Available for this Stock</div>
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
    lineSettings: state.settings.chart.line
  }
}
  
export default connect(mapStateToProps)(CardChart)