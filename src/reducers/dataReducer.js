const initState = {
    liveStockData: [],
    liveChartData: [],
    historicalData: [],
    isAllStockDataReceived: false,
    isAllChartDataReceived: false,
    isAllHistoricalDataReceived: false,
    availableStocks: []
}

const dataReducer = (state = initState, action) => {
    if(action.type === "UPDATE_DATA_STATUS_CHART") {
        if(action.length === state.liveChartData.length) {
            return {
                ...state,
                isAllChartDataReceived: true
            }
        } else {
            return {
                ...state,
                isAllChartDataReceived: false
            }
        }
    }
    if(action.type === "UPDATE_DATA_STATUS_STOCK") {
        if(action.length === state.liveStockData.length) {
            return {
                ...state,
                isAllStockDataReceived: true
            }
        } else {
            return {
                ...state,
                isAllStockDataReceived: false
            }
        }
    }
    if(action.type === "UPDATE_DATA_STATUS_HISTORICAL") {
        if(action.length === state.historicalData.length) {
            return {
                ...state,
                isAllHistoricalDataReceived: true
            }
        } else {
            return {
                ...state,
                isAllHistoricalDataReceived: false
            }
        }
    }    
    if(action.type === "SIGNOUT_USER") {
        return initState;
    }
    if(action.type === "LOAD_AVAILABLE_STOCK_LIST") {
        return {
            ...state,
            availableStocks: action.list
        } 
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
    if(action.type === 'ERROR_RECEIVING_CHART_DATA'){
        return {
            ...state,
            liveChartData: [...state.liveChartData, {[action.stock] : null}]
        }
    }
    if(action.type === 'ERROR_RECEIVING_HISTORICAL_DATA'){
        return {
            ...state,
            historicalData: [...state.historicalData, {[action.stock] : null}]
        }
    }
    return state
}

export default dataReducer