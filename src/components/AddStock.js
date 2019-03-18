import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import { addNewStockAndGetData } from '../reducers/actions/addNewStockAndGetData'

class AddStock extends Component {

    state={
        isClicked: false,
        newStock: ''
    }

    handleClick = () => {
        this.setState({
            ...this.state,
            isClicked:true
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addStock(this.state.newStock)
        this.setState({
            ...this.state,
            isClicked:false
        })
    }

    render(){
        const inputForm = this.state.isClicked ? (
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor="newStock">Stock Symbol</label>
                <input type="text" id="newStock" maxLength="5" onChange={ this.handleChange } />
                <button>Add Stock</button>
            </form>
        ) : (
            <div></div>
        )

    
    return (
        <div>
            <span onClick={ this.handleClick }>+</span>
            { inputForm }
        </div>
    )
    }
}   

const mapDispatchToProps = (dispatch) => {
    return {
        addStock: (stock) => {dispatch(addNewStockAndGetData(stock))}
    }
}

export default connect(null, mapDispatchToProps)(AddStock)