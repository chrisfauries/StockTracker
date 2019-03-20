import axios from 'axios'
import { getUserData } from './getUserData'

export const createNewUser = (data) => {
    return (dispatch, getState) => {
        dispatch({type: "CREATING_NEW_USER"});
        const settingsData = getState().user
        axios.post('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/createNewUser', {
            firstName: data.firstName,
            lastName: data.lastName,
            userName: data.userName,
            email: data.email,
            uid: data.uid,
            chart: settingsData.chart,
            layout: settingsData.layout,
            other: settingsData.other
          })
          .then(function (res) {

            if(res.data === "Document successfully written!") {
              dispatch({type: "LOGIN_USER_SENT"});
              axios.get('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabUserData?uid=' + data.uid)
              .then(res => {
                dispatch({type: "CARD_DATA_REQUESTED"});
                dispatch({type: "LOGIN_USER_FULFILLED", data: res.data, uid:data.uid});
                // eslint-disable-next-line
                res.data.stocks.map(stock => {
                    axios.get('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabStockData?stock=' + stock)
                    .then(res => {
                        dispatch({type: 'CARD_DATA_RECEIVED', payload: res.data});
                    })
                })
                // eslint-disable-next-line
                res.data.stocks.map(stock => {
                    axios.get('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabInterDay?stock=' + stock)
                        .then(res => {
                            dispatch({type: 'CHART_DATA_UPDATED', payload: res.data, stocksymbol: stock})
                        })
                })  
            })
            .catch(err => dispatch({type: "LOGIN_USER_ERROR"}))
            } else {
                console.log(res);
            }
          })
          .catch(function (err) {
            console.log(err);
          });
        
    }  
   
}