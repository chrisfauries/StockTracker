const initState = {
    liveStockData: [],
    liveChartData: [],
    historicalData: [],
    availableStocks: ['AMZN', 'MSFT', 'GOOG', 'TWLO', 'NFLX', 'FB', 'ADBE', 'SQ', 'SRPT', 'BABA', 'TSLA', 'SRPT', 'XLK', 'TNAV', 'APPS', 'AAPL', 'NXPI', 'SSCO', 'MCD', 'HD', 'XOM', 'BA', 'VZ', 'MRK', 'KO', 'V', 'DIS', 'NKE', 'WMT', 'JPM', 'TWTR', 'NBL', 'HES', 'GS', 'UNH', 'AXP', 'WBA', 'BAM', 'TXN', 'SBUX', 'DFS', 'CERN', 'CRM', 'CSX', 'ATVI', 'EXPE']
}

const dataReducer = (state = initState, action) => {
    if(action.type === "SIGNOUT_USER") {
        return initState;
    }
    if(action.type === "CARD_DATA_REQUESTED") {
        return state; 
    }
    if(action.type === "CARD_DATA_RECEIVED") {
        return {
            ...state,
            liveStockData: [...state.liveStockData, action.payload]
        }
    }
    if(action.type === 'USER_STOCKS_DELETED'){
        const newLiveData = state.liveStockData.filter(stock => stock.symbol !== action.stock)
        const liveChartData = state.liveChartData.filter(stock => stock[action.stock] === undefined)
        return {
            ...state,
            liveStockData: newLiveData,
            liveChartData: liveChartData
        }
    }
    if(action.type === 'CHART_DATA_UPDATED'){
        let data = {[action.stocksymbol]: action.payload}
        return {
            ...state,
            liveChartData: [...state.liveChartData, data]
        }
    }
    return state
}

export default dataReducer