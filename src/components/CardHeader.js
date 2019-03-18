// import React from 'react'
// import styles from '../sass/CardHeader.module.scss'

// function CardHeader(props) {
//     const stock = props.stock
//     return (
//         <div className={ styles.card } key={ stock.symbol }>
//             <h3 className={ styles.name }>{ stock.name }</h3>
//             <p className={ styles.price }>Current price: ${ stock.price }</p>
//             <p className={ styles.dayChange }>${ stock.day_change }</p>
//             <p className={ styles.changePct }>{ stock.change_pct }%</p>
//           </div>
//     )
// }

// export default CardHeader


import React from 'react'
// import styles from '../sass/CardHeader.module.scss'

function CardHeader(props) {
    const stock = props.stock
    return (
        <div key={ stock.symbol }>
            <span className='card-title'>{ stock.name }</span>
            <p>Current price: ${ stock.price }</p>
            <p>${ stock.day_change }</p>
            <p>{ stock.change_pct }%</p>
          </div>
    )
}

export default CardHeader
