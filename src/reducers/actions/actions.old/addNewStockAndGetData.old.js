// import axios from 'axios'

// export const addNewStockAndGetData = (stock, type) => {
//     return (dispatch, getState) => {
//         const uid = getState().auth.uid;
//         dispatch({type: 'UPDATING_USER_STOCKLIST'})
//         axios.get('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/changeUserStockList?uid=' + uid + '&stock=' + stock + '&type=' + type)
//             .then(res => {
//                 dispatch({type: 'USER_STOCKS_ADDED', stock: stock})
//                 axios.get('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabInterDay?stock=' + stock)
//                     .then(res => {
//                         dispatch({type: 'CHART_DATA_UPDATED', payload: res.data, stocksymbol: stock})
//                     })
//                 axios.get('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabStockData?stock=' + stock)
//                     .then(res => {
//                         dispatch({type: 'CARD_DATA_RECEIVED', payload: res.data});
//                     })
//             })
//             .catch(err => dispatch({type: "LOGIN_USER_ERROR"}))
//     }
// }