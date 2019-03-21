import React from 'react'
import { connect } from 'react-redux';
import { deleteStock } from '../reducers/actions/userActions'
import trashcan from '../img/trash.png'
import styles from '../sass/Cards.module.scss'

function DeleteStock(props) {

    const handleClick = () => {
        props.deleteStock(props.symbol, props.uid)
    }

    return (
        <div className={ styles.trash }onClick={ handleClick }>
            <img className='right' src={ trashcan } alt='trashcan' />
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteStock: (stock, uid) => {dispatch(deleteStock(stock, uid))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteStock)