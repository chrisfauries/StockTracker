import axios from 'axios'

export const addNewStockAndGetData = (stock) => {
    return (dispatch, getState) => {
        const uid = getState().user.uid;
        dispatch({type: 'UPDATING_USER_STOCKLIST'})
        axios.get('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/addNewStockToUserAndGetData?uid=' + uid + '&stock=' + stock)
            .then(res => {
                dispatch({type: 'USER_STOCKS_UPDATED', chart: res.data})
            })
    }
}