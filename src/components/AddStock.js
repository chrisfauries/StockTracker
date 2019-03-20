import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNewStockAndGetData } from '../reducers/actions/addNewStockAndGetData'
import styles from '../sass/AddStock.module.scss'
import { Input, Button, Modal, Icon } from 'react-materialize'

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
        <div  className="card col s12 m6 l4 waves-effect waves-block waves-light z-depth-0">
                <Modal
                    trigger={
                        <div className="card medium green lighten-5 hoverable center-align">
                            <i style={{paddingTop: '160px'}} className='black-text large material-icons center-align'>add</i>
                        </div>
                            }
                    actions={
                        <Button waves='light modal-close' onClick={ this.handleSubmit }>Submit</Button>
                    }>
                    <div className='container center-align'>
                        <h4 className='green-text'>Add Stock</h4>
                        <Input style={{width: '200px', paddingTop: '20px'}} type="text" id="newStock" placeholder="stock symbol" maxLength="5" onChange={ this.handleChange } />
                    </div>
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