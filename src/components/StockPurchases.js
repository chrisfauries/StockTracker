import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Row, Input, Button, Modal, Col } from 'react-materialize'
import { deletePurchase } from '../reducers/actions/deletePurchase'
import PurchaseNewStock from './PurchaseNewStock'

class StockPurchases extends Component {

    handleSubmit = (id, symbol) => {
        this.props.deletePurchase(id, symbol, 'DELETE_PURCHASE')
    }
    
    render() {

        const purchased = this.props.stocksPurchased
        const symbol = this.props.symbol
        const allStocks =  purchased[symbol] ? (
            purchased[symbol].map(stock => {
                return (
                    <div  key={ stock.id }>
                        <Col s={4}>{ stock.date }</Col>
                        <Col s={2}>{ stock.price }</Col>
                        <Col className="center align-center" s={3}>{ stock.quantity }</Col>
                        <Col s={3}>
                            <Modal
                                trigger={<Button  >Delete</Button>}>
                                <Row>
                                    <p>Are you sure you want to delete this stock?</p>
                                    <Button waves='light' id={ stock.id } onClick={ ()=>{this.handleSubmit(stock.id, symbol)} } >Submit</Button>
                                </Row>
                            </Modal>
                        </Col>
                    </div>
                )
            })
        ) :
        (
            <div>You don't own any {symbol} stock yet, go buy more!!!</div>
        )
        
        if (!this.props.auth) return <Redirect to='/' />
        return (
            <div>
                 <div className="title blue-text">{ symbol }</div>
                    <Row>
                        <Col s={4}>Date:</Col>
                        <Col s={2}>Price:</Col>
                        <Col s={3}>Quantity:</Col>

                    { allStocks }
                    <PurchaseNewStock symbol={ symbol } />
                    </Row>
                    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    stocksPurchased: state.user.stocksPurchased,
    auth: state.user.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
        return {
            deletePurchase: (id, symbol, type) => {dispatch(deletePurchase(id, symbol, type))}
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(StockPurchases)