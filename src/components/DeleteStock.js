import React from 'react'
import { connect } from 'react-redux';
import { deleteStockAndData } from '../reducers/actions/deleteStockAndData'
import trashcan from '../img/trash.png'
import styles from '../sass/Cards.module.scss'

function DeleteStock(props) {

    const handleClick = () => {
        props.deleteStock(props.symbol, 'delete')
    }

    return (
        <div className={ styles.trash }onClick={ handleClick }>
            <img className='right' src={ trashcan } alt='trashcan' />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteStock: (stock, type) => {dispatch(deleteStockAndData(stock, type))}
    }
}

export default connect(null, mapDispatchToProps)(DeleteStock)