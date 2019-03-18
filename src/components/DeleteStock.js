import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteStockAndData } from '../reducers/actions/deleteStockAndData'
import trashcan from '../img/trash.png'

function DeleteStock(props) {


    const handleClick = () => {
        props.deleteStock(props.symbol)
    }

    return (
        <div onClick={ handleClick }>
            <img src={ trashcan } />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteStock: (stock) => {dispatch(deleteStockAndData(stock))}
    }
}

export default connect(null, mapDispatchToProps)(DeleteStock)