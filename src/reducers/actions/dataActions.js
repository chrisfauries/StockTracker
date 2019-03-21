export const getLiveStockData = (stocks) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fs = getFirestore();
        stocks.map(stock => { 
            fs.collection('Data').doc(stock).get()
            .then(res =>  {
                console.log(res)
                dispatch({type: 'CARD_DATA_RECEIVED', payload: res.data()});
            })
            .catch(err => dispatch({type: "ERROR_RECEIVING_LIVE_DATA", err: err}));
        })
    }
}

export const getInterdayStockData = (stocks) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fs = getFirestore();
        stocks.map(stock => { 
            fs.collection('InterDay').doc(stock).get()
            .then(res =>  {
                console.log(res.data())
                var arr = []
                Object.keys(res.data()).map(key => arr.push(res.data()[key]));
                dispatch({type: 'CHART_DATA_UPDATED', payload: arr, stocksymbol: stock})
            })
            .catch(err => dispatch({type: "ERROR_RECEIVING_INTERDAY_DATA", err: err}));
        })
    }
}