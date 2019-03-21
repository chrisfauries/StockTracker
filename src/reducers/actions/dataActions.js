export const getLiveStockData = (stocks) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fs = getFirestore();
        stocks.map(stock => { 
            fs.collection('Data').doc(stock).get()
            .then(res =>  {
                console.log(res.data())
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
                dispatch({type: 'CHART_DATA_UPDATED', payload: res.data(), stocksymbol: stock})
            })
            .catch(err => dispatch({type: "ERROR_RECEIVING_INTERDAY_DATA", err: err}));
        })
    }
}