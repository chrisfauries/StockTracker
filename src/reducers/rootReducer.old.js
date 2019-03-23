import shortid from 'shortid'
import { settings } from '../config/settings.js'

const initState = {
    auth: {
        status: 'logged Out',
        isAuth: false,
        uid: ''
    },
    user: {
        stocks: [],
        stocksPurchased: {},        
    },
    data: {
        liveStockData: [],
        liveChartData: [],
        historicalData: [],
        availableStocks: ['AMZN', 'MSFT', 'GOOG', 'TWLO', 'NFLX', 'FB', 'ADBE', 'SQ', 'SRPT', 'BABA', 'TSLA', 'SRPT', 'XLK', 'TNAV', 'APPS', 'AAPL', 'NXPI', 'SSCO', 'MCD', 'HD', 'XOM', 'BA', 'VZ', 'MRK', 'KO', 'V', 'DIS', 'NKE', 'WMT', 'JPM', 'TWTR', 'NBL', 'HES', 'GS', 'UNH', 'AXP', 'WBA', 'BAM', 'TXN', 'SBUX', 'DFS', 'CERN', 'CRM', 'CSX', 'ATVI', 'EXPE']
    },
    settings: {
        general: settings.general,
        chart: settings.chart,
        layout: settings.layout,
        other: settings.other
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
            auth:{
                ...state.auth,
                status: 'pending'
            }
        }
    }
    if(action.type === "LOGIN_USER_FULFILLED") {
        return {
            ...state,
            auth: {
                ...state.auth,
                status: 'logged In',
                isAuth: true,
                uid: action.uid,
            },
            user: {
                ...state.user,
                stocks: action.data.stocks,
                stocksPurchased: action.data.PurchasedStock,
                general: action.data.general,
                chart: action.data.chart,
                layout: action.data.layout,
                other: action.data.other                
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
                        [purchase.symbol]: [...state.user.stocksPurchased[purchase.symbol], 
                                                { 
                                                    date:purchase.date, 
                                                    price: purchase.price, 
                                                    quantity:purchase.quantity, 
                                                    id:shortid.generate()
                                                }
                                            ]
                    
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

    if(action.type==='DELETE_PURCHASE'){
        let { symbol } = action
        let { id } = action
        const updateStocksPurchased = state.user.stocksPurchased[symbol].filter(item => item.id !== id)
        return{
            user:{
                ...state.user,
                stocksPurchased:{
                    ...state.user.stocksPurchased,
                        [symbol]: updateStocksPurchased
                    
                }
            }
        }
    }

    if(action.type === 'UPDATE_GENERAL_SETTINGS'){
        let general = action.data
        return {
            ...state,
            user:{
                ...state.user,
                general: general
            }
        }
    }


    return state;
}

export default rootReducer