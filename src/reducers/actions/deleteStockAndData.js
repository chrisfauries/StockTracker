import axios from 'axios'

export const deleteStockAndData = (stock) => {
    return (dispatch, getState) => {
        const uid = getState().user.uid;
        dispatch({type: 'DELETING_STOCKS'})
        axios.get('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/deleteStockFromUser?uid=' + uid + '&stock=' + stock)
            .then(res => {
                dispatch({type: 'USER_STOCKS_DELETED', chart: res.data})
            })
    }
}