import axios from 'axios'

export const deleteStockAndData = (stock, type) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        dispatch({type: 'DELETING_STOCKS'})
        axios.get('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/changeUserStockList?uid=' + uid + '&stock=' + stock + '&type=' + type)
            .then(res => {
                dispatch({type: 'USER_STOCKS_DELETED', stock: stock})
            })
    }
}