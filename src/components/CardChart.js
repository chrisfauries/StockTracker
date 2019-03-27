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


    //get data for historical
    const { symbol } = this.props
    var stocksHistorical = this.props.historicalData.find(stock =>  stock[symbol])
    var labelsAll = [];
    var priceArrayAll = [];
    if(stocksHistorical !== undefined) {
      stocksHistorical[symbol].forEach(stock => {
          priceArrayAll.push(stock.price)
          labelsAll.push(stock.date)
    })
  }
    var priceArray = []
    var labels = [];
    var labelsYears;
    var priceArrayYears;


    //get data for day
    var stocksDaily = this.props.liveChartData.find(stock =>  stock[symbol])
    var times = [];
    var priceArrayDaily = [];
    if(stocksDaily !== undefined) {
      stocksDaily[symbol].forEach(stock => {
          priceArrayDaily.push(stock.price)
          times.push(stock.time)
    })
    }

    switch(this.state.timeFrame){
          case 'Today':
            priceArray = [];
            labels = [];
            times.map(label => {
              var splitString = label.split(":")
              if (splitString[0] > 12){
                labels.push((splitString[0]-12) + ":" + splitString[1])
              }
              else{
                labels.push(label)
              }
            })
            priceArray = priceArrayDaily;
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
            priceArray = [];
            labels = [];
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
            priceArray = [];
            labels = [];
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
            priceArray = [];
            labels = [];
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
              pointHitRadius: 7,
              borderColor: this.props.lineSettings.colorLine
            }
          ]
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
            title: function (tooltipItem, data) { return data.labels[tooltipItem[0].index]; },
            label: function(tooltipItems) { return  '$' + tooltipItems.value; }
          }
        }
      }
  
      const post = labels.length ? ( <Line
            key= { symbol }
            data={chartData}
            width={100}
            height={215}
            options={ options }
          /> ) : (
          <div>
            <div>
              <Line
              key= { symbol }
              data={chartData}
              width={100}
              height={215}
              options={ options }
            />
            </div>
            <p className = { styles.noData }>Daily Data not Currently Available</p>
          </div>
          )
      
      return (
        <div>
          <div  className='activator'>
          { post }
          </div>
          <div id='chartSelectors'className={ styles.itemHeader }>
            <div className={ styles.active } onClick={ this.handleClick }>Today</div>
            <div onClick={ this.handleClick }>30 day</div>
            <div onClick={ this.handleClick }>90 day</div>
            <div onClick={ this.handleClick }>1 year</div>
            <div onClick={ this.handleClick }>3 years</div>
            <div onClick={ this.handleClick }>5 years</div>
          </div>
        </div>
      )

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