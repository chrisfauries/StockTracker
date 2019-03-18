const initState = {
    user: {
        status: 'logged Out',
        isAuth: false,
        uid: '',
        stocks: [],
        liveStockData: [],
        stocksPurchased: {
            AAPL: [
            {date: '1/1/2019', price: '101.85', quantity: '2', id: 1},
            {date: '1/15/2019', price: '105.15', quantity: '1', id: 2}
            ],
            TSLA: [
            {date: '2/1/2019', price: '311.85', quantity: '1', id: 1},
            {date: '3/15/2019', price: '335.15', quantity: '10', id: 2}
            ]
        }
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

    return state;
}

export default rootReducer