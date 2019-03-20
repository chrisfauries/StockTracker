import React from 'react'
import { connect } from 'react-redux';
import { deleteStockAndData } from '../reducers/actions/deleteStockAndData'
import trashcan from '../img/trash.png'
import { Row, Input, Button, Modal, Col } from 'react-materialize'

function DeleteStock(props) {


    const handleClick = () => {
        props.deleteStock(props.symbol, 'delete')
        
    }

    return (
        <div style={{cursor:'pointer'}}onClick={ handleClick }>
             <Button waves='light' className='right'>Delete Card</Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteStock: (stock, type) => {dispatch(deleteStockAndData(stock, type))}
    }
}

export default connect(null, mapDispatchToProps)(DeleteStock)