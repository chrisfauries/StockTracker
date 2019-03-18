import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNewStockAndGetData } from '../reducers/actions/addNewStockAndGetData'
import styles from '../sass/AddStock.module.scss'

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
        this.props.addStock(this.state.newStock, 'add')
        this.setState({
            ...this.state,
            isClicked:false
        })
    }

    render(){
        const inputForm = this.state.isClicked ? (
            <form className={ styles.inputForm }onSubmit={ this.handleSubmit }>
                <label htmlFor="newStock">Stock Symbol</label>
                <input type="text" id="newStock" maxLength="5" onChange={ this.handleChange } />
                <button>Add Stock</button>
            </form>
        ) : (
            <div></div>
        )

    
    return (
        <div className={ styles.addStock } onClick={ this.handleClick }>
            { inputForm }
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