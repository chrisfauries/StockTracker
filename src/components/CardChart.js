import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2'
import styles from '../sass/CardChart.module.scss'

class CardChart extends Component {
  state = {
     timeFrame: 'Today'
  }

  handleClick =(e) => {
    e.preventDefault();
    var chartSel = e.target.parentElement.querySelectorAll('div');
    chartSel.forEach(btn => btn.classList.remove(styles['active']));
    e.target.classList.add(styles['active']);
    if (this.state.timeFrame !== e.target.innerHTML){
      this.setState({
        timeFrame: e.target.innerHTML
    })
    }
  }

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
    var priceArray = []
    var labels;
    var labelsYears;
    var priceArrayYears;

    
    switch(this.state.timeFrame){
          case 'Today':
            stocks = this.props.liveChartData.find(stock =>  stock[symbol])
            var times = [];
            priceArray = [];
            if(stocks !== undefined) {
              stocks[symbol].forEach(stock => {
                  priceArray.push(stock.price)
                  times.push(stock.time)
            })
            }
            times.map(label => {
              var splitString = label.split(":")
              if (splitString[0] > 12){
                times.push((splitString[0]-12) + ":" + splitString[1])
              }
              else{
                labels.push(times)
              }
            })
            break;
          case '30 day':
            labels = labelsAll.slice(0, 22)
            priceArray = priceArrayAll.slice(0, 22)
            priceArray.reverse()
            labels.reverse()
            break;
          case '90 day':
            labels = labelsAll.slice(0, 66)
            priceArray = priceArrayAll.slice(0, 66)
            priceArray.reverse()
            labels.reverse()
            break;
          case '1 year':
            labelsYears = labelsAll.slice(0, 252)
            priceArrayYears = priceArrayAll.slice(0, 252)
            priceArrayYears.reverse()
            labelsYears.reverse()
        
            for(let i=0; i<priceArrayYears.length; i+=3){
                labels.push(labelsYears[i])
                priceArray.push(priceArrayYears[i])
            }
            break;
          case '3 years':
            labelsYears = labelsAll.slice(0, 756)
            priceArrayYears = priceArrayAll.slice(0, 756)
            priceArrayYears.reverse()
            labelsYears.reverse()
        
            for(let i=0; i<priceArrayYears.length; i+=10){
                labels.push(labelsYears[i])
                priceArray.push(priceArrayYears[i])
            }
            break;
          case '5 years':
            labelsYears = labelsAll.slice(0, 1260)
            priceArrayYears = priceArrayAll.slice(0, 1260)
            priceArrayYears.reverse()
            labelsYears.reverse()
        
            for(let i=0; i<priceArrayYears.length; i+=15){
                labels.push(labelsYears[i])
                priceArray.push(priceArrayYears[i])
            }
            break;
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
  
      const post = <Line
            key= { symbol }
            data={chartData}
            width={100}
            height={225}
            options={ options }
          />
      
      return (
        <div className='activator'>
          { post }
        </div>
      )







    // const post = (
    //     <div>
    //       { charting }
    //       <div id='chartSelectors'className={styles.itemHeader}>
    //             <div className={ styles.active } onClick={ this.handleClick }>Today</div>
    //             <div onClick={ this.handleClick }>30 day</div>
    //             <div onClick={ this.handleClick }>90 day</div>
    //             <div onClick={ this.handleClick }>1 year</div>
    //             <div onClick={ this.handleClick }>3 years</div>
    //             <div onClick={ this.handleClick }>5 years</div>
    //           </div>
    //     </div>
    // )
    
    // return (
    //   <div className='activator'>
    //     { post }
        
    //   </div>
    // )
  }
}

const mapStateToProps = (state) => {
  return {
    liveChartData: state.data.liveChartData,
    lineSettings: state.settings.chart.line,
    historicalData: state.data.historicalData
  }
}
  
export default connect(mapStateToProps)(CardChart)