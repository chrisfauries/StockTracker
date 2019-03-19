const initState = {
    user: {
        status: 'logged Out',
        isAuth: false,
        uid: '',
        stocks: [],
        liveStockData: [],
        stocksPurchased: {
            AAPL: [
            {date: '1/1/2015', price: '91.85', quantity: '2', id: 1},
            {date: '11/15/2016', price: '105.15', quantity: '1', id: 2},
            {date: '8/15/2018', price: '125.15', quantity: '10', id: 3},
            {date: '4/25/2018', price: '145.15', quantity: '2', id: 4},
            {date: '2/15/2019', price: '165.15', quantity: '1', id: 5}
            ],
            TSLA: [
            {date: '2/1/2019', price: '311.85', quantity: '1', id: 1},
            {date: '3/15/2019', price: '335.15', quantity: '10', id: 2}
            ]
        },
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
    if(action.type === "CREATING_NEW_USER") {
        return state; 
    }
    if(action.type === "NEW_USER_CREATED") {
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

    if(action.type === 'USER_STOCKS_ADDED'){
        return {
            ...state,
            user: {
                ...state.user,
                stocks: [...state.user.stocks, action.stock]
            }
        }
    }

    if(action.type === 'DELETING_STOCKS'){
        return state;
    }

    if(action.type === 'USER_STOCKS_DELETED'){
        const newStocks = state.user.stocks.filter(stock => stock !== action.stock)
        const newLiveData = state.user.liveStockData.filter(stock => stock.symbol !== action.stock)
        const liveChartData = state.user.liveChartData.filter(stock => stock[action.stock] === undefined)
        return {
            ...state,
            user: {
                ...state.user,
                liveStockData: newLiveData,
                stocks: newStocks,
                liveChartData: liveChartData
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

    if(action.type==='ADD_PURCHASE'){
        let purchase = action.purchase
        return {
            ...state,
            user:{
                ...state.user,
                stocksPurchased:{
                    ...state.user.stocksPurchased,
                    [purchase.symbol]: [...state.user.stocksPurchased[purchase.symbol], {date:purchase.date, price: purchase.price, quantity:purchase.quantity, id:purchase.id}]
                }
            }
        }
    }

    return state;
}

export default rootReducer