import React, { Component } from 'react'
import axios from 'axios'

class CardChart extends Component {
  state = {
    stockData: []
  }
  
  componentWillMount(){
      const { symbol } = this.props
      axios.get('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabInterDay?stock=' + symbol)
      .then(res => {
       return (
        this.setState({
          stockData: [...this.state.stockData, res.data]
        })
       )
      })
    }

  render() {
    console.log(this.state.stockData);
    return (
      <div>
        <p>This is a chart for: { this.props.symbol }</p>
      </div>
    )
  }
}

export default CardChart

