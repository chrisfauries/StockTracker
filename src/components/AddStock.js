import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNewStock } from '../reducers/actions/userActions'
import styles from '../sass/AddStock.module.scss'
import { Input, Button, Modal } from 'react-materialize'

class AddStock extends Component {

    state={
        newStock: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value.toUpperCase()
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.availableStocks.includes(this.state.newStock)){
            if(this.props.stocks.includes(this.state.newStock)){
                alert("you already have this card listed")
            }
            else{
                this.setState({
                    newStock: ''
                })
                return this.props.addStock(this.state.newStock, this.props.uid)
            }}
        else{
            alert("Sorry, " + this.state.newStock + " is not available at this time.")
        }
        
    }

    render(){
        

    
    return (
        <div  className="card col s12 m6 l4 waves-effect waves-block waves-light z-depth-0">
                <Modal className={styles.popUp}
                    trigger={
                        <div className="card medium grey lighten-5 hoverable center-align">
                            <i className={`black-text large material-icons center-align ${styles.icon}`}>add</i>
                        </div>
                            }
                    actions={
                        <Button className='modal-close' waves='light' onClick={ this.handleSubmit }>Submit</Button>
                    }>
                    <i className={`material-icons right modal-close ${styles.cross}`}>close</i>
                    <div className='container center-align'>
                        <h4 className='green-text'>Add Stock</h4>
                        <Input className={styles.input} value = {this.state.newStock} type="text" id="newStock" placeholder="stock symbol" maxLength="5" onChange={ this.handleChange } />
                    </div>
                </Modal>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
  return {
    availableStocks: state.data.availableStocks,
    uid: state.firebase.auth.uid,
    stocks: state.user.stocks
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addStock: (stock, uid) => {dispatch(addNewStock(stock, uid))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStock)