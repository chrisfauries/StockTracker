const initState = {
    liveStockData: [],
    liveChartData: [],
    historicalData: [],
    isAllStockDataReceived: false,
    isAllChartDataReceived: false,
    isAllHistoricalDataReceived: false,
    availableStocks: ['AMZN', 'MSFT', 'GOOG', 'TWLO', 'NFLX', 'FB', 'ADBE', 'SQ', 'SRPT', 'BABA', 'TSLA', 'SRPT', 'XLK', 'TNAV', 'APPS', 'AAPL', 'NXPI', 'SSCO', 'MCD', 'HD', 'XOM', 'BA', 'VZ', 'MRK', 'KO', 'V', 'DIS', 'NKE', 'WMT', 'JPM', 'TWTR', 'NBL', 'HES', 'GS', 'UNH', 'AXP', 'WBA', 'BAM', 'TXN', 'SBUX', 'DFS', 'CERN', 'CRM', 'CSX', 'ATVI', 'EXPE']
}

const dataReducer = (state = initState, action) => {
    if(action.type === "UPDATE_DATA_STATUS") {
        if(action.length === state.liveStockData.length) {
            return {
                ...state,
                isAllStockDataReceived: true
            }
        }
    }
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
    if(action.type === 'DELETED_STOCK_FROM_USER_STOCKLIST'){
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
    if(action.type === 'HISTORICAL_DATA_UPDATED'){
        let data = {[action.stocksymbol]: action.payload}
        return {
            ...state,
            historicalData: [...state.historicalData, data]
        }
    }
    return state
}

export default dataReducer