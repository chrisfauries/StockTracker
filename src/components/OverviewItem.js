import React from 'react'
import shortid from 'shortid'
// import { purchaseStats } from '../logic/calc'

function OverviewItem(props) {

    const { stock } = props
    const { stocksPurchased } = props.data
    const currentPrice = props.data.liveStockData.find(item => item.symbol === stock).price

    const stockItems = stocksPurchased[stock] ?
    (
        stocksPurchased[stock].map(purchase =>{
            let cost = purchase.price * purchase.quantity;
            let value = currentPrice * purchase.quantity;
            let gainLossDollar = (value - cost) > 0 ? (`+$${(value - cost).toFixed(2)}`) : (`-$${(value - cost).toFixed(2)}`)
            let gainLossPct = (value - cost) > 0 ? (`+${((value / cost) * 100).toFixed(2)}%`) : (`-${((value / cost) * 100).toFixed(2)}%`)

            return (
                <tr key={ shortid.generate() }>
                    <td>{ purchase.date }</td>
                    <td>{ purchase.price }</td>
                    <td>{ purchase.quantity }</td>
                    <td>{ `$${cost}` }</td>
                    <td>{ `$${value}` }</td>
                    <td>{ gainLossDollar }</td>
                    <td>{ gainLossPct }</td>

                </tr>
            )
        })
    ) : (
                <tr>
                    <td>Go to Stocks page and add purchases to see stats here</td>
                </tr>
    )
    
        
  return (
    <div key={ shortid.generate() }>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                    <th>Value</th>
                    <th>Gain/Loss $</th>
                    <th>Gain/Loss %</th>
                </tr>
            </thead>
            <tbody>
                { stockItems }
            </tbody>
        </table>
    </div>
  )
}

export default OverviewItem
