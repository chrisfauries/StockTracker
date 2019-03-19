import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Input, Button, Modal } from 'react-materialize'
import { newPurchaseStock } from '../reducers/actions/newPurchaseStock'
import shortid from 'shortid'

class PurchaseNewStock extends Component {

    state = {
        symbol: '',
        date: '',
        quantity: null,
        price: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.newPurchase(this.state, 'ADD_PURCHASE')
    }

    render() {

        return(
            <div>
                <Modal
                    header='Purchase New Stocks'
                    trigger={<Button>Click to purchase new Stocks!!!</Button>}>
                    <Row>
                        <Input id='symbol' placeholder="Stock Symbol" s={4} label="Stock Symbol" onChange={ this.handleChange } />
                        <Input s={5} id='date' label="Date Purchased" placeholder="mm/dd/yyyy" onChange={ this.handleChange } />
                        <Input s={3} id='price' label="price" placeholder="$price" onChange={ this.handleChange } />
                        <Input s={2} id='quantity' label="Quantity" onChange={ this.handleChange } />
                        <Button waves='light' onClick={ this.handleSubmit }>Submit</Button>
                    </Row>
                </Modal>
            </div>
        )
    }
    }
    const mapDispatchToProps = (dispatch) => {
        return {
            newPurchase: (purchase, type) => {dispatch(newPurchaseStock(purchase, type))}
        }
    }

export default connect(null, mapDispatchToProps)(PurchaseNewStock)