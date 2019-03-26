import React, { Component } from 'react'
import CardHeader from './CardHeader'
import CardChart from './CardChart'
import { connect } from 'react-redux'
import AddStock from './AddStock'
import DeleteStock from './DeleteStock'
import StockPurchases from './StockPurchases'
import shortid from 'shortid'
import { getUserData } from '../reducers/actions/userActions'




class Cards extends Component {
  state = {
     timeFrame: 'today'
  }

  componentDidUpdate() {
    if(this.props.authFB.uid && !this.props.status.requested) {
      this.props.getUserData(this.props.authFB.uid)
    }
  }

  componentDidMount() {
    setTimeout(
      function() {
        if (this.props.authFB.isEmpty) this.props.history.push('/')
      }
      .bind(this),
      500
    );
  }

  

  render() {
    const { stocks } = this.props;
    


    const stockList = stocks.length ? (
      stocks.map(stock => {

        return (
          <div className="card col s12 m6 l4 waves-effect waves-block waves-light z-depth-0" key={ shortid.generate() }>
            <div className='card medium grey lighten-5 hoverable'>
              <div className='card-content black-text'>
                <CardHeader stock={ stock } />
                <CardChart symbol = {stock.symbol} />
                <DeleteStock symbol={ stock.symbol } />
              </div>
              <div className='card-reveal green lighten-5'>
                <span className='card-title grey-text text-darken-4'>
                  <i className="material-icons right">close</i>
                  <StockPurchases name = { stock.name } symbol={ stock.symbol }/>
                </span>
              </div> 
            </div>  
          </div>   
        )
      })
    ) : (
          <div></div>
        )
    
      return this.props.received ? (
      <div className='row'>
        { stockList }
        <AddStock />
      </div>  
    ) : (
      <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.user,
    stocks: state.data.liveStockData,
    auth: state.auth.isAuth,
    authFB: state.firebase.auth,
    received: state.data.isAllStockDataReceived
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: (uid) => {dispatch(getUserData(uid))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
