import React from 'react'
import { Pie } from 'react-chartjs-2'


function OverviewPie(props) {
    
    const { stocks } = props.data
    const { stocksPurchased } = props.data

    const dataPoints = stocks.map(stock => {
        var sum = 0;
        if(stocksPurchased[stock]) {
            stocksPurchased[stock].map(item => { return sum += (item.price * item.quantity) });
            return Number(sum.toFixed(2));
        } else { 
            return sum;
        } 
    })

    const buildBGcolorList = (length) => {
        var arr = [];
        for(let i=0; i< length; i++) {
            arr.push(`#${Math.floor(Math.random()*16777215).toString(16)}`)
        }
        return arr;
    }

    const data = {
        labels: [ ...stocks ],
        datasets: [{
            data: [ ...dataPoints ],
            backgroundColor: [ ...buildBGcolorList(stocks.length) ],
            hoverBackgroundColor: [ ...buildBGcolorList(stocks.length) ]
        }]
    };

    const options = { 
        legend:{
            display: false, 
            position: 'bottom'
        }, 
        tooltips:{ 
            displayColors: false,
            enabled:true, 
            bodyFontSize: 24,
            callbacks:{ 
                label: function(tooltipItems) { return ''; },
                title: function(tooltipItems, data) { return `${data.labels[tooltipItems[0].index]} :  $${data.datasets[0].data[tooltipItems[0].index]}`}
            }
        },
        title: { 
            display: 'The Title',
            text: 'Portfolio Breakdown',
            fontSize: 25
        }
    }
    
  return (
      
      <div className="col s6 grey lighten-5">
        <h4 className="center-align">Portfilio Breakdown</h4>
        <Pie data={data} options= { options }/>
      </div>
  )
}

export default OverviewPie
