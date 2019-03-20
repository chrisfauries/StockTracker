import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Row, Input, Button, Modal } from 'react-materialize'
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
                    <div key={ stock.id } className=" row grey-text text-darken-4">
                        
                        <div className="col s4">Date:</div>
                        <div className="col s3">Price:</div>
                        <div className="col s3">Quantity:</div>
                        <div className="col s4">{ stock.date }</div>
                        <div className="col s3">{ stock.price }</div>
                        <div className="col s2">{ stock.quantity }</div>
                        <div className="col s1">
                            <Modal
                                trigger={<Button  >Delete</Button>}>
                                <Row>
                                    <p>Are you sure you want to delete this stock?</p>
                                    <Button waves='light' id={ stock.id } onClick={ ()=>{this.handleSubmit(stock.id, symbol)} } >Submit</Button>
                                </Row>
                            </Modal></div>
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
                 <div className="title">{ symbol }</div>
                 { allStocks }
                 <PurchaseNewStock symbol={ symbol } />
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