// import axios from 'axios'

// export const getCardsData = (stocksList) => {
//     return (dispatch, getState) => {
//         dispatch({type: "CARDS_DATA_REQUESTED"});
//         stocksList.map(stock => {
//             axios.get('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabStockData?stock=' + stock)
//             .then(res => {
//                 dispatch({type: 'CARDS_DATA_RECEIVED', payload: res.data});
//           })
//         })
//     }
// }