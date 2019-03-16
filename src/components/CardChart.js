import React, { Component } from 'react'
import axios from 'axios'
import {Bar, Line, Pie} from 'react-chartjs-2'

class CardChart extends Component {
  state = {
    stockData:{
      labels: ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00'],
      datasets:[
        {
          label:'Stock ',
          data:[]
        }
      ]
    }
  }
  
  componentWillMount(){
      const { symbol } = this.props
      axios.get('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabInterDay?stock=' + symbol)
      .then(res => {
       return (
        this.setState({
          stockData: [res.data]
        })
       )
      })
    }

  render() {
    const asdf = [123, 155]
    console.log(this.state.stockData)
    const post = this.state.stockData[0] ? (
      <Line
          data={asdf}
          width={100}
          height={50}
          options={{}}
        />
    ): (
      <div>Loading chart...</div>
    )
    return (
      <div>
        { post }
      </div>
    )
  }
}

export default CardChart

