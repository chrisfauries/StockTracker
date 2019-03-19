import React from 'react'
import { Pie } from 'react-chartjs-2'



function OverviewPie(props) {
    console.log(props.data)
    const data = {
        labels: [
            'Facebook',
            'Google',
            'Apple'
        ],
        datasets: [{
            data: [3600, 9423, 1565],
            backgroundColor: [
            'green',
            'blue',
            'red'
            ],
            hoverBackgroundColor: [
            'lightgreen',
            'lightblue',
            'lightred'
            ]
        }]
    };

    const options = { legend:{display: true, position: 'bottom'}, tooltips:{ enabled:true }, title: { display: 'The Title', text: 'Portfolio Breakdown', fontSize: 25} }

    
  return (
      
      <div className="col s6 grey lighten-5">
        <h4 className="center-align">Portfilio Breakdown</h4>
        <Pie data={data} options= { options }/>
      </div>
  )
}

export default OverviewPie
