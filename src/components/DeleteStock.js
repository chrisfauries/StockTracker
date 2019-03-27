import React from 'react'
import { connect } from 'react-redux';
import { deleteStock } from '../reducers/actions/userActions'
import trashcan from '../img/trash.png'
import styles from '../sass/Cards.module.scss'
import { Button, Modal } from 'react-materialize'

function DeleteStock(props) {
 
    const handleClick = () => {
        props.deleteStock(props.symbol, props.uid)
    }

    return (
        <div className={ styles.trash }>
            <Modal className={styles.popUp}
                trigger={<img className='right' src={ trashcan } alt='trashcan' />}
                actions={ <div><Button className='red modal-close' waves='light' onClick={ handleClick }>Delete</Button><Button waves='light' className='modal-close'>Cancel</Button></div> }>
                    <div className={styles.modalContent}><p className='center-align'>Are you sure you want to delete this stock? This will also delete all purchases for this stock.</p></div>
            </Modal>
            
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