import React from 'react'
import styles from '../sass/CardHeader.module.scss'

function CardHeader(props) {
    const stock = props.stock

    var dayChange;
    var isDayChangePos =true;
    if(props.stock.day_change > 0) {
        dayChange = '$+' + props.stock.day_change;
    } else {
        dayChange = '$' + props.stock.day_change;
        isDayChangePos = false;
    }

    var pctChange;
    var isPctChangePos = true;
    if(props.stock.change_pct > 0) {
        pctChange = '+' + props.stock.change_pct + '%';
    } else {
        pctChange = props.stock.change_pct + '%';
        isPctChangePos = false;
    }

    console.log(dayChange)
    return (
        <div className='row' key={ stock.symbol }>
            <div className="col m8 l8">
                <p className={`truncate activator ${styles.title}`}>{ stock.name }</p>
                <p className={`${styles.ticker}`}>{ stock.symbol }</p>
            </div>
            <div className="col m4 l4 right-align">
                <p className={`${styles.price}`}>${ stock.price }</p>
                <p className={isDayChangePos ? styles.pos : styles.neg}>{ dayChange }</p>
                <p className={isPctChangePos ? styles.pos : styles.neg}>{ pctChange }</p>
            </div>
        </div>
    )
}

export default CardHeader
