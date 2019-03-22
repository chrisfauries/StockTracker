import { getLiveStockData, getInterdayStockData, getHistoricalStockData } from './dataActions'
import firebase from 'firebase'

export const getUserData = (uid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fs = getFirestore();
        dispatch({type: 'REQUESTING_USER_DATA'});
        fs.collection('Users').doc(uid).get()
        .then(res => {
                dispatch({type: "USER_DATA_RECEIVED", data: res.data(), uid:uid});
                dispatch({type: "CARD_DATA_REQUESTED"});
                dispatch(getLiveStockData(res.data().stocks));
                dispatch({type: 'CHART_DATA_REQUESTED'});
                dispatch(getInterdayStockData(res.data().stocks));
                dispatch({type: 'HISTORICAL_DATA_REQUESTED'});
                dispatch(getHistoricalStockData(res.data().stocks));
                
        })
        .catch(err => dispatch({type: "ERROR_RECEIVING_USER_DATA", err: err}));
    }
}

export const addNewStock = (stock, uid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fs = getFirestore();
        dispatch({stock: stock, type: 'ADDING_STOCK_TO_USER_STOCKLIST'})
        fs.collection('Users').doc(uid).update({  
        stocks: firebase.firestore.FieldValue.arrayUnion(stock)
      })
      .then(res => {
            dispatch({type: "ADDED_STOCK_TO_USER_STOCKLIST"})
            dispatch(getLiveStockData([stock]));
            dispatch(getInterdayStockData([stock]));
            dispatch(getHistoricalStockData([stock]));
        })
      .catch(err => dispatch({type: "ERROR_ADD_STOCK_TO_USER", err: err}));
      }
}

export const deleteStock = (stock, uid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fs = getFirestore();
        dispatch({type: 'DELETING_STOCK_FROM_USER_STOCKLIST'})
        fs.collection('Users').doc(uid).update({
        stocks: firebase.firestore.FieldValue.arrayRemove(stock)
      })
      .then(res => {
            dispatch({type: "DELETED_STOCK_FROM_USER_STOCKLIST", stock: stock})
            dispatch(deleteAllStockPurchases(stock, uid))
        })
      .catch(err => dispatch({type: "ERROR_DELETING_STOCK_FROM_USER", err: err}));
    
    }
}

export const addPurchase = (purchase, uid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({type: 'ADDING_NEW_PURCHASE_TO_USER', purchase: purchase})
        dispatch({type: "NEW_PURCHASE_ADDED", purchase: purchase});
        const fs = getFirestore();
        const allPurchases = getState().user.stocksPurchased;
        fs.collection('Users').doc(uid).update({PurchasedStock: allPurchases})
        .then(res => dispatch({type: 'USER_PURCHASES_UPDATED'}))
        .catch(err => dispatch({type: "ERROR_ADDING_PURCHASE_FROM_USER", err: err}));   
    }
  }    
        
  export const deletePurchase = (id, symbol) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({type: 'DELETING_PURCHASE_FROM_USER', id:id, symbol:symbol})
        dispatch({type: 'DELETED_PURCHASE_FROM_USER', id:id, symbol:symbol});
        const fs = getFirestore();
        const uid = getState().firebase.auth.uid;
        const allPurchases = getState().user.stocksPurchased;
        console.log(allPurchases)
        fs.collection('Users').doc(uid).update({PurchasedStock: allPurchases})
        .then(res => dispatch({type: 'USER_PURCHASES_UPDATED'}))
        .catch(err => dispatch({type: "ERROR_DELETING_PURCHASE_FROM_USER", err: err}));
    }  
}

export const deleteAllStockPurchases = (stock, uid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({type: 'DELETING_ALL_PURCHASES_FOR_STOCK'})
        const fs = getFirestore();
        const stocksPurchased = getState().user.stocksPurchased
        delete stocksPurchased[stock]
        fs.collection('Users').doc(uid).update({
        PurchasedStock: stocksPurchased
      }).then(res => {
        dispatch({type: 'DELETED_ALL_PURCHASES_FOR_STOCK', stock: stock})
      })
      .catch(err => dispatch({type: "ERROR_DELETING_ALL_STOCK_PURCHASES_FROM_USER", err: err}));
    }
}