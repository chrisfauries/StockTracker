import { getLiveStockData, getInterdayStockData } from './dataActions'

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
                
        })
        .catch(err => dispatch({type: "ERROR_RECEIVING_USER_DATA", err: err}));
    }
}