const initState = {
    user: {
        status: 'logged Out',
        isAuth: false,
        uid: '',
        stocks: [],
        liveStockData: [],
        liveChartData: []
    }
}

const rootReducer = (state=initState, action) => {
    if(action.type === "CONSOLE_LOG") {
        // Test to see if dispatches are reaching the reducer
        console.log('logged to the console');
    }
    if(action.type === 'LOGIN_USER_SENT') {
        return {
            ...state,
            user: {
                ...state.user,
                status: 'pending'
            }
        }
    }
    if(action.type === "LOGIN_USER_FULFILLED") {
        return {
            ...state,
            user: {
                ...state.user,
                status: 'logged In',
                isAuth: true,
                uid: action.uid,
                stocks: action.payload.stocks
            }
        } 
    }
    if(action.type === "ADD_STOCK") {
        return {
            ...state,
            user: {
                ...state.user,
                stocks: [...state.user.stocks, action.chart]
            }
        } 
    }
    if(action.type === "LOGIN_USER_ERROR") {
        return state;
    }
    if(action.type === "LOGOUT_USER") {
        return initState;
    }
    if(action.type === "CARD_DATA_REQUESTED") {
        return state; 
    }
    if(action.type === "CARD_DATA_RECEIVED") {
        return {
            ...state,
            user: {
                ...state.user,
                liveStockData: [...state.user.liveStockData, action.payload]
            }
        } 
    }
    if(action.type === 'UPDATING_USER_STOCKLIST'){
        return state;
    }

    if(action.type === 'USER_STOCKS_UPDATED'){
        return {
            ...state,
            user: {
                ...state.user,
                stocks: [...state.user.stocks, action.chart.symbol],
                liveStockData: [...state.user.liveStockData, action.chart]
            }
        }
    }

    if(action.type === 'DELETING_STOCKS'){
        return state;
    }

    if(action.type === 'USER_STOCKS_DELETED'){
        const newStocks = state.user.liveStockData.filter(stock => stock.symbol != action.chart)
        const newLiveData = state.user.stocks.filter(stock => stock != action.chart)
        return {
            ...state,
            user: {
                ...state.user,
                liveStockData: newLiveData,
                stocks: newStocks
            }
        }
    }

    if(action.type === 'CHART_DATA_UPDATED'){
        let data = {[action.stocksymbol]: action.payload}
        return {
            ...state,
            user:{
                ...state.user,
                liveChartData: [...state.user.liveChartData, data]
            }
        }
    }

    return state;
}

export default rootReducer