import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNewStockAndGetData } from '../reducers/actions/addNewStockAndGetData'
// import styles from '../sass/AddStock.module.scss'
import { Input, Button, Modal } from 'react-materialize'

class AddStock extends Component {

    state={
        newStock: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addStock(this.state.newStock, 'add')
    }

    render(){
        
    
    return (
        <div>
                <Modal
                    header='Add Stock for Tracking'
                    trigger={<Button>Add Stock for Tracking</Button>}>
                        <Input type="text" id="newStock" placeholder="stock symbol" maxLength="5" onChange={ this.handleChange } />
                        <Button waves='light' onClick={ this.handleSubmit }>Submit</Button>
                </Modal>
        </div>
    )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addStock: (stock, type) => {dispatch(addNewStockAndGetData(stock, type))}
    }
}

export default connect(null, mapDispatchToProps)(AddStock)