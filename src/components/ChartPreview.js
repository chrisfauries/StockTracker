import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class CardPreview extends Component {
  state ={
      data: [
        {AAPL:[{"time":"09:30","price":"185.89"},{"time":"09:35","price":"186.71"},{"price":"186.71","time":"09:40"},{"time":"09:45","price":"187.08"},{"price":"187.27","time":"09:50"},{"price":"187.35","time":"09:55"},{"time":"10:00","price":"187.32"},{"time":"10:05","price":"187.52"},{"price":"187.93","time":"10:10"},{"price":"187.70","time":"10:15"},{"price":"188.16","time":"10:20"},{"price":"188.01","time":"10:25"},{"time":"10:30","price":"188.33"},{"price":"188.04","time":"10:35"},{"time":"10:40","price":"187.84"},{"price":"188.10","time":"10:45"},{"price":"188.10","time":"10:50"},{"price":"188.21","time":"10:55"},{"price":"188.22","time":"11:00"},{"price":"187.95","time":"11:05"},{"time":"11:10","price":"187.87"},{"time":"11:15","price":"187.87"},{"price":"187.74","time":"11:20"},{"time":"11:25","price":"187.40"},{"time":"11:30","price":"187.61"},{"time":"11:35","price":"187.31"},{"time":"11:40","price":"187.33"},{"price":"187.20","time":"11:45"},{"price":"187.46","time":"11:50"},{"time":"11:55","price":"187.54"},{"price":"187.57","time":"12:00"},{"price":"187.43","time":"12:05"},{"time":"12:10","price":"187.53"},{"time":"12:15","price":"187.59"},{"time":"12:20","price":"187.23"},{"price":"187.37","time":"12:25"},{"price":"187.28","time":"12:30"},{"time":"12:35","price":"187.13"},{"time":"12:40","price":"187.46"},{"price":"187.59","time":"12:45"},{"time":"12:50","price":"187.55"},{"price":"187.52","time":"12:55"},{"price":"187.40","time":"13:00"},{"price":"187.39","time":"13:05"},{"time":"13:10","price":"187.59"},{"price":"187.61","time":"13:15"},{"time":"13:20","price":"187.63"},{"time":"13:25","price":"187.70"},{"price":"187.81","time":"13:30"},{"price":"187.85","time":"13:35"},{"price":"187.84","time":"13:40"},{"price":"187.96","time":"13:45"},{"price":"187.90","time":"13:50"},{"time":"13:55","price":"188.02"},{"time":"14:00","price":"188.09"},{"price":"188.18","time":"14:05"},{"time":"14:10","price":"188.05"},{"price":"188.03","time":"14:15"},{"price":"188.09","time":"14:20"},{"price":"187.95","time":"14:25"},{"price":"187.82","time":"14:30"},{"price":"187.80","time":"14:35"},{"time":"14:40","price":"187.83"},{"time":"14:45","price":"187.78"},{"time":"14:50","price":"187.94"},{"price":"187.88","time":"14:55"},{"price":"187.97","time":"15:00"},{"time":"15:03","price":"187.98"}]},
        {GOOG:[{"time":"09:30","price":"1182.47"},{"time":"09:35","price":"1183.26"},{"price":"1181.55","time":"09:40"},{"price":"1179.50","time":"09:45"},{"price":"1182.85","time":"09:50"},{"price":"1181.99","time":"09:55"},{"price":"1186.04","time":"10:00"},{"price":"1186.24","time":"10:05"},{"price":"1189.95","time":"10:10"},{"price":"1188.04","time":"10:15"},{"price":"1187.72","time":"10:20"},{"price":"1187.00","time":"10:25"},{"price":"1185.95","time":"10:30"},{"time":"10:35","price":"1184.31"},{"time":"10:40","price":"1184.59"},{"price":"1185.40","time":"10:45"},{"time":"10:50","price":"1185.69"},{"price":"1187.14","time":"10:55"},{"time":"11:00","price":"1187.18"},{"price":"1187.39","time":"11:05"},{"time":"11:10","price":"1186.83"},{"price":"1185.77","time":"11:15"},{"price":"1184.69","time":"11:20"},{"price":"1182.55","time":"11:25"},{"price":"1183.89","time":"11:30"},{"time":"11:35","price":"1183.08"},{"time":"11:40","price":"1181.97"},{"price":"1183.03","time":"11:45"},{"time":"11:50","price":"1182.32"},{"price":"1180.20","time":"11:55"},{"time":"12:00","price":"1180.71"},{"time":"12:05","price":"1180.22"},{"price":"1179.36","time":"12:10"},{"time":"12:15","price":"1180.21"},{"time":"12:20","price":"1177.55"},{"price":"1178.29","time":"12:25"},{"price":"1179.95","time":"12:30"},{"price":"1179.47","time":"12:35"},{"time":"12:40","price":"1180.26"},{"time":"12:45","price":"1180.25"},{"price":"1180.83","time":"12:50"},{"time":"12:55","price":"1181.25"},{"price":"1181.01","time":"13:00"},{"price":"1182.00","time":"13:05"},{"price":"1182.88","time":"13:10"},{"time":"13:15","price":"1181.54"},{"price":"1180.51","time":"13:20"},{"price":"1181.71","time":"13:25"},{"time":"13:30","price":"1181.69"},{"time":"13:35","price":"1181.75"},{"time":"13:40","price":"1182.31"},{"price":"1183.56","time":"13:45"},{"price":"1183.50","time":"13:50"},{"price":"1183.90","time":"13:55"},{"price":"1185.22","time":"14:00"},{"price":"1184.43","time":"14:05"},{"price":"1184.82","time":"14:10"},{"time":"14:15","price":"1184.92"},{"price":"1186.23","time":"14:20"},{"price":"1185.46","time":"14:25"},{"price":"1185.59","time":"14:30"},{"price":"1185.60","time":"14:35"},{"price":"1186.88","time":"14:40"},{"price":"1186.49","time":"14:45"},{"price":"1186.66","time":"14:50"},{"time":"14:55","price":"1185.02"},{"time":"15:00","price":"1184.91"},{"price":"1184.57","time":"15:02"}]},
        {TSLA:[{"time":"09:30","price":"276.00"},{"price":"276.64","time":"09:35"},{"time":"09:40","price":"276.51"},{"time":"09:45","price":"276.85"},{"time":"09:50","price":"275.20"},{"time":"09:55","price":"273.35"},{"time":"10:00","price":"272.52"},{"price":"271.96","time":"10:05"},{"price":"271.75","time":"10:10"},{"price":"271.28","time":"10:15"},{"time":"10:20","price":"271.54"},{"time":"10:25","price":"268.93"},{"price":"267.49","time":"10:30"},{"time":"10:35","price":"268.89"},{"price":"269.42","time":"10:40"},{"time":"10:45","price":"267.64"},{"time":"10:50","price":"269.57"},{"price":"269.66","time":"10:55"},{"price":"270.49","time":"11:00"},{"price":"270.26","time":"11:05"},{"time":"11:10","price":"269.82"},{"time":"11:15","price":"270.04"},{"price":"271.16","time":"11:20"},{"price":"270.38","time":"11:25"},{"time":"11:30","price":"270.11"},{"time":"11:35","price":"269.22"},{"price":"269.82","time":"11:40"},{"price":"269.94","time":"11:45"},{"time":"11:50","price":"270.29"},{"time":"11:55","price":"269.53"},{"price":"269.59","time":"12:00"},{"time":"12:05","price":"269.80"},{"price":"270.06","time":"12:10"},{"price":"270.32","time":"12:15"},{"time":"12:20","price":"269.82"},{"time":"12:25","price":"270.04"},{"time":"12:30","price":"270.01"},{"price":"269.17","time":"12:35"},{"price":"268.86","time":"12:40"},{"price":"270.59","time":"12:45"},{"time":"12:50","price":"269.80"},{"price":"269.84","time":"12:55"},{"time":"13:00","price":"269.56"},{"time":"13:05","price":"269.27"},{"price":"269.10","time":"13:10"},{"time":"13:15","price":"268.30"},{"price":"268.49","time":"13:20"},{"price":"268.98","time":"13:25"},{"time":"13:30","price":"268.47"},{"time":"13:35","price":"269.00"},{"price":"268.96","time":"13:40"},{"time":"13:45","price":"269.13"},{"time":"13:50","price":"269.13"},{"time":"13:55","price":"269.86"},{"price":"269.58","time":"14:00"},{"time":"14:05","price":"269.60"},{"price":"270.22","time":"14:10"},{"price":"269.96","time":"14:15"},{"time":"14:20","price":"270.50"},{"time":"14:25","price":"270.20"},{"time":"14:30","price":"270.24"},{"price":"269.29","time":"14:35"},{"price":"269.46","time":"14:40"},{"time":"14:45","price":"269.92"},{"price":"270.06","time":"14:50"},{"price":"269.85","time":"14:55"},{"time":"15:00","price":"270.23"},{"time":"15:03","price":"270.24"}]}
    ]
  }
  render() {

    const { symbol } = this.props
    var stocks = this.state.data.find(stock =>  stock[symbol])
    const labels = [];
    const priceArray = [];
    if(stocks !== undefined) {
    stocks[symbol].forEach(stock => {
        priceArray.push(stock.price)
        labels.push(stock.time)
    })

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

    const post = stocks !== undefined ? (
      <Line
          key= { symbol }
          data={chartData}
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
  
export default CardPreview