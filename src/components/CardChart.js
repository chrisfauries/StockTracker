import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import CardChart30Day from './CardChart30Day'
import CardChart90Day from './CardChart90Day'
import CardChartToday from './CardChartToday'
import CardChart1Year from './CardChart1Year'
import CardChart3Year from './CardChart3Year'
import CardChart5Year from './CardChart5Year'
import styles from '../sass/CardChart.module.scss'

class CardChart extends Component {
  state = {
     timeFrame: 'Today'
  }

  handleClick(e) {
    e.preventDefault()
    if (this.state.timeFrame != e.target.innerHTML){
      this.setState({
        timeFrame: e.target.innerHTML
    })
    }
  }

  render() {
    
    switch(this.state.timeFrame){
          case 'Today':
            var charting= (<CardChartToday symbol={this.props.symbol} />)
            break;
          case '30 day':
            var charting = (<CardChart30Day symbol={this.props.symbol} />)
            break;
          case '90 day':
            var charting = (<CardChart90Day symbol={this.props.symbol} />)
            break;
          case '1 year':
            var charting = (<CardChart1Year symbol={this.props.symbol} />)
            break;
          case '3 years':
            var charting = (<CardChart3Year symbol={this.props.symbol} />)
            break;
          case '5 years':
            var charting = (<CardChart5Year symbol={this.props.symbol} />)
            break;
        }

    const post = (
        <div>
          { charting }
          <div className={styles.itemHeader}>
                <div onClick={ this.handleClick.bind(this) }>Today</div>
                <div onClick={ this.handleClick.bind(this) }>30 day</div>
                <div onClick={ this.handleClick.bind(this) }>90 day</div>
                <div onClick={ this.handleClick.bind(this) }>1 year</div>
                <div onClick={ this.handleClick.bind(this) }>3 years</div>
                <div onClick={ this.handleClick.bind(this) }>5 years</div>
              </div>
        </div>
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
    lineSettings: state.settings.chart.line,
    historicalData: state.data.historicalData
  }
}
  
export default connect(mapStateToProps)(CardChart)