import React from 'react'
import styles from '../sass/CardHeader.module.scss'

function CardHeader(props) {
    const stock = props.stock
    return (
        <div className={ styles.card } key={ stock.symbol }>
            <h3>{ stock.name }</h3>
            <p className={ styles.symbol }>{ stock.symbol }</p>
            <p className={ styles.price }>{ stock.price }</p>
            <p className={ styles.dayChange }>${ stock.day_change }</p>
            <p className={ styles.changePct }>{ stock.change_pct }%</p>
          </div>
    )
}

export default CardHeader
