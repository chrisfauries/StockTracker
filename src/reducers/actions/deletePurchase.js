// import axios from 'axios'

// export const deletePurchase = (id, symbol, type) => {
//     return (dispatch, getState) => {
//         dispatch({id:id, symbol:symbol, type: type});
//         const uid = getState().auth.uid;
//         const stocksPurchased = getState().user.stocksPurchased
//         axios.post('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/updateUserPurchases', {
//             purchase: stocksPurchased,
//             uid: uid
//           })
//           .then(function (res) {
//             if(res.data === "Successfully Added") {
//                 dispatch({type: 'USER_PURCHASES_UPDATED'})
//             } else {
//             }
//           })
//           .catch(function (err) {
//           }); 
//     }  
// }