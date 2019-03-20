import React from 'react'
import { Collapsible, CollapsibleItem } from 'react-materialize'
import OverviewItem from './OverviewItem'
import shortid from 'shortid'

function OverviewList(props) {
    const { stocks } = props.data

    const stockList = stocks.map(stock =>{
        return (
            <CollapsibleItem header={stock} icon='attach_money' key={ shortid.generate() } >
                <OverviewItem data= { props.data } stock= { stock }/>
            </CollapsibleItem>
        )
    })

  return (
    <div>
      <Collapsible  key={ shortid.generate() }>
        { stockList }
      </Collapsible>
    </div>
  )
}

export default OverviewList
