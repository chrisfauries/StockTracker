export const loadAvailableStocks = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fs = getFirestore();
        fs.collection('Admin').doc('StockList').get()
        .then(res => dispatch({type: "LOAD_AVAILABLE_STOCK_LIST", list: res.data().stocks}))
    }
}

export const getLiveStockData = (stocks) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fs = getFirestore();
        stocks.map(stock => { 
            fs.collection('Live').doc(stock).get()
            .then(res =>  {
                dispatch({type: 'CARD_DATA_RECEIVED', payload: res.data()});
                if(stocks.length > 1) {dispatch({type: 'UPDATE_DATA_STATUS_STOCK', length: stocks.length})}
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
                var arr = []
                Object.keys(res.data()).map(key => arr.push(res.data()[key]));
                dispatch({type: 'CHART_DATA_UPDATED', payload: arr, stocksymbol: stock})
                if(stocks.length > 1) {dispatch({type: 'UPDATE_DATA_STATUS_CHART', length: stocks.length})}
            })
            .catch(err => dispatch({type: "ERROR_RECEIVING_INTERDAY_DATA", err: err}));
        })
    }
}


export const getHistoricalStockData = (stocks) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fs = getFirestore();
        stocks.map(stock => { 
            fs.collection('Historical').doc(stock).get()
            .then(res =>  {
                var arr = []
                Object.keys(res.data()).map(key => arr.push(res.data()[key]));
                dispatch({type: 'HISTORICAL_DATA_UPDATED', payload: arr, stocksymbol: stock})
                    if(stocks.length > 1) {dispatch({type: 'UPDATE_DATA_STATUS_HISTORICAL', length: stocks.length})}
            })
            .catch(err => dispatch({type: "ERROR_RECEIVING_HISTORICAL_DATA", err: err}));
        })
    }
}