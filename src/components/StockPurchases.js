import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Row, Input, Button, Modal, Col } from 'react-materialize'
import { deletePurchase } from '../reducers/actions/deletePurchase'
import PurchaseNewStock from './PurchaseNewStock'
import styles from '../sass/StockPurchases.module.scss'

class StockPurchases extends Component {

    handleSubmit = (id, symbol) => {
        this.props.deletePurchase(id, symbol, 'DELETE_PURCHASE')
    }
    
    render() {

        const purchased = this.props.stocksPurchased
        const symbol = this.props.symbol
        const allStocks =  (purchased[symbol] && purchased[symbol].length !== 0) ? (
            purchased[symbol].map(stock => {
                return (
                    <div  key={ stock.id }>
                        <Col s={4}>{ stock.date }</Col>
                        <Col s={2}>{`$${Number(stock.price).toFixed(2)}`}</Col>
                        <Col className="center align-center" s={3}>{ stock.quantity }</Col>
                        <Col s={3}>
                            <Modal className={styles.popUp}
                                trigger={<Button className='red'>Delete</Button>}
                                actions={ <div><Button waves='light' className='modal-close'>Close</Button><Button className='red modal-close' waves='light' id={ stock.id } onClick={ ()=>{this.handleSubmit(stock.id, symbol)} } >Delete</Button></div> }
                            >
                                <Row>
                                    <div className={styles.modalContent}><p className='center-align'>Are you sure you want to delete this stock?</p></div>
                                    <div className={styles.modalContent}><p className='center-align'>{`${stock.quantity} ${stock.quantity === '1' ? 'share' : 'shares'} of ${symbol} stock at $${Number(stock.price).toFixed(2)} on ${stock.date}`}</p></div>
                                </Row>
                            </Modal>
                        </Col>
                    </div>
                )
            })
        ) :
        (
            <div className='center-align'><Col s={12}>You don't own any {symbol} stock. Click below to add!</Col></div>
        )

        const descriptions = (purchased[symbol] && purchased[symbol].length !== 0) ? (
            <div>
                <Col s={4}>Date:</Col>
                <Col s={2}>Price:</Col>
                <Col s={3}>Quantity:</Col>
                <Col s={3}> </Col>
                </div> 
                ) : ( 
                <div></div> 
                )
        
        // if (!this.props.auth) return <Redirect to='/' />
        return (
            <div>
                 <div className="title blue-text center-align">{ this.props.name }</div>
                    <Row>
                        { descriptions }
                        { allStocks }
                    </Row>
                <PurchaseNewStock name={ this.props.name } symbol={ symbol } />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    stocksPurchased: state.user.stocksPurchased,
    auth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
        return {
            deletePurchase: (id, symbol, type) => {dispatch(deletePurchase(id, symbol, type))}
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(StockPurchases)