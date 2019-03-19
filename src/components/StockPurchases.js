import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Row, Input, Button, Modal } from 'react-materialize'

class StockPurchases extends Component {

    state = {
        id: null
    }

    handleSubmit = (id, symbol) => {
        console.log(id, symbol)
    }
    
    render() {

        const purchased = this.props.stocksPurchased
        const symbol = this.props.symbol
        const allStocks =  purchased[symbol] ? (
            purchased[symbol].map(stock => {
                return (
                    <div key={ stock.id } className=" row grey-text text-darken-4">
                        <div className="col s12"></div>
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
                { allStocks }
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


export default connect(mapStateToProps)(StockPurchases)