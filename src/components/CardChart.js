import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import CardChart30Day from './CardChart30Day'
import CardChartToday from './CardChartToday'

class CardChart extends Component {
  state = {
     timeFrame: 'today'
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
          case 'today':
            var charting= (<CardChartToday symbol={this.props.symbol} />)
            break;
          case '30 day':
            var charting = (<CardChart30Day symbol={this.props.symbol} />)
            break;
        }

    const post = (
        <div>
          { charting }
          <p><span onClick={ this.handleClick.bind(this) }>30 day</span><span onClick={ this.handleClick.bind(this) } >today</span></p>
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
    historicalData: state.data.historicalData
  }
}
  
export default connect(mapStateToProps)(CardChart)