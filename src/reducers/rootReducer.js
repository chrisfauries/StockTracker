import shortid from 'shortid'

const initState = {
    user: {
        status: 'logged Out',
        isAuth: false,
        uid: '',
        stocks: [],
        liveStockData: [],
        stocksPurchased: {},
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
                stocks: action.payload.stocks,
                stocksPurchased: action.payload.PurchasedStock
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
        if (state.user.stocksPurchased[purchase.symbol]){
        return {
            ...state,
            user:{
                ...state.user,
                stocksPurchased:{
                    ...state.user.stocksPurchased,
                        [purchase.symbol]: [...state.user.stocksPurchased[purchase.symbol], {date:purchase.date, price: purchase.price, quantity:purchase.quantity, id:shortid.generate()}]
                    
                }
            }
        }
    }
        else{
            return {
            ...state,
            user:{
                ...state.user,
                stocksPurchased:{
                    ...state.user.stocksPurchased,
                        [purchase.symbol]: [{date:purchase.date, price: purchase.price, quantity:purchase.quantity, id:shortid.generate()}]
                    
                }
            }
        }
        }
    }

    // if(action.type==='DELETE_PURCHASE'){
    //     let stockId = action.deleteStock
    //     return{
    //         user:{
    //             ...state.user,
    //             stocksPurchased:{
    //                 ...state.user.stocksPurchased,
    //                     [purchase.symbol]: [...state.user.stocksPurchased[purchase.symbol], {date:purchase.date, price: purchase.price, quantity:purchase.quantity, id:shortid.generate()}]
                    
    //             }
    //         }
    //     }
    // }


    return state;
}

export default rootReducer