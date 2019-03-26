import React from 'react'
import { Collapsible, CollapsibleItem } from 'react-materialize'
import OverviewItem from './OverviewItem'
import styles from '../sass/Overview.module.scss'
import shortid from 'shortid'
import { getStockHis } from '../logic/calc'

function OverviewList(props) {
    const { stocks } = props.data
    const stockList = props.data.received ? stocks.map(stock =>{
        return (
            <CollapsibleItem header={
              <div className={styles.itemDetails}>
                <div> { stock }</div>
                <div>{ getStockHis(props, stock, 30) } </div>
                <div>{ getStockHis(props, stock, 90) } </div>
                <div>{ getStockHis(props, stock, 360) } </div>
              </div>
              } icon='attach_money' key={ shortid.generate() } >
                <OverviewItem data= { props.data } stock= { stock }/>
            </CollapsibleItem>
        )
    }) : (<div></div>)

  return (
    <div className='container'>
      <Collapsible key={ shortid.generate() }>
        { stockList }
      </Collapsible>
    </div>
  )
}

export default OverviewList
