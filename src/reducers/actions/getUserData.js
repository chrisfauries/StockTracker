import axios from 'axios'

export const getUserData = (uid) => {
    return (dispatch, getState) => {
        dispatch({type: "LOGIN_USER_SENT"});
        axios.get('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabUserData?uid=' + uid)
            .then(res => {
                dispatch({type: "CARD_DATA_REQUESTED"});
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
                dispatch({type: "LOGIN_USER_FULFILLED", payload: res.data, uid:uid});
            })
            .catch(err => dispatch({type: "LOGIN_USER_ERROR"}))
    }
    
}