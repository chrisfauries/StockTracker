import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'

class CardChart5Year extends Component {
  
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
    
    const labelsYears = labelsAll.slice(0, 1260)
    const priceArrayYears = priceArrayAll.slice(0, 1260)
    priceArrayYears.reverse()
    labelsYears.reverse()
    var labels = []
    var priceArray=[]

    for(let i=0; i<priceArrayYears.length; i+=15){
        labels.push(labelsYears[i])
        priceArray.push(priceArrayYears[i])
    }

    var chartData = {
        labels: labels,
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
    historicalData: state.data.historicalData,
    lineSettings: state.settings.chart.line
  }
}
  
export default connect(mapStateToProps)(CardChart5Year)