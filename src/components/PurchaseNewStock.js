import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Input, Button, Modal } from 'react-materialize'
import { addPurchase } from '../reducers/actions/userActions'

class PurchaseNewStock extends Component {

    state = {
        symbol: '',
        date: null,
        quantity: "",
        price: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            symbol: this.props.symbol
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPurchase(this.state, this.props.authFB.uid)
    }

    render() {

        const { date, quantity, price } = this.state
        const isDisabled = date === null || isNaN(quantity) || isNaN(price) || !quantity.length || !price.length

        return(
            <div>
                <Modal
                    trigger={
                        <div className='center-align'>
                            <Button>Add New</Button>
                        </div>
                    } 
                    actions={
                        <Button disabled={isDisabled} className="modal-close" waves='light' onClick={ this.handleSubmit }>Submit</Button>
                    }
                >
                    <i style={{cursor: 'pointer'}} className="material-icons right modal-close">close</i>
                    <h4 className='green-text center-align'>Add Stock</h4>
                    <Row className='container center-align'>
                        <h5 id={ this.props.symbol }>{ this.props.name }</h5>
                        <Input s={5} id='date' label="Date Purchased" validate placeholder="mm/dd/yyyy" onChange={ this.handleChange } required />
                        <Input s={3} id='price' label="price" placeholder="price" onChange={ this.handleChange } required />
                        <Input s={2} id='quantity' label="Quantity" placeholder={"0"}onChange={ this.handleChange } required />
                    </Row>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    authFB: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPurchase: (purchase, uid) => {dispatch(addPurchase(purchase, uid))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseNewStock)