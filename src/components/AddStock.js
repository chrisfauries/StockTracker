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
                <Modal className={styles.popUp}
                    trigger={
                        <div className="card medium green lighten-5 hoverable center-align">
                            <i className={`black-text large material-icons center-align ${styles.icon}`}>add</i>
                        </div>
                            }
                    actions={
                        <Button waves='light modal-close' onClick={ this.handleSubmit }>Submit</Button>
                    }>
                    <i class={`material-icons right modal-close ${styles.cross}`}>close</i>
                    <div className='container center-align'>
                        <h4 className='green-text'>Add Stock</h4>
                        <Input className={styles.input} type="text" id="newStock" placeholder="stock symbol" maxLength="5" onChange={ this.handleChange } />
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