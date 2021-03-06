import React from 'react'
import styles from '../sass/CardHeader.module.scss'
import ReactTooltip from 'react-tooltip'

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

    return (
        <div className='row' key={ stock.symbol }>
            <div className="col s8 l8">
                <p className={`truncate teal-text ${styles.title}`} >{ stock.name }</p>
                <a className={`btn-floating btn-small waves-effect waves-light teal activator center ${ styles.button }`} data-place="top" data-tip='Manage stock purchases'><i class="material-icons">add</i></a>
                <p className={`${styles.ticker}`}>{ stock.symbol }</p>
            </div>
            <ReactTooltip place='bottom' />
            <div className="col s4 l4 right-align">
                <p className={`${styles.price}`}>${ stock.price }</p>
                <p className={isDayChangePos ? styles.pos : styles.neg}>{ dayChange }</p>
                <p className={isPctChangePos ? styles.pos : styles.neg}>{ pctChange }</p>
            </div>
        </div>
    )
}

export default CardHeader
