import shortid from 'shortid'

const initState = {
    stocks: [],
    stocksPurchased: {},
    requested: false,
}

const userReducer = (state = initState, action) => {
    if(action.type === "SIGNOUT_USER") {
        return initState;
    }
    if(action.type === 'REQUESTING_USER_DATA'){
        return {
            ...state,
            requested: true
        }
    }
    if(action.type === "USER_DATA_RECEIVED") {
        return {
            ...state,
            stocks: action.data.stocks,
            stocksPurchased: action.data.PurchasedStock,
        } 
    }
    if(action.type === "ADDING_STOCK_TO_USER_STOCKLIST") {
        return {
            ...state,
            stocks: [...state.stocks, action.stock]
        } 
    }
    if(action.type === 'USER_STOCKS_ADDED'){
        return {
            ...state,
            stocks: [...state.stocks, action.stock]
        }
    }
    if(action.type === 'DELETING_STOCKS'){
        return state;
    }

    if(action.type === 'USER_STOCKS_DELETED'){
        const newStocks = state.stocks.filter(stock => stock !== action.stock)
        return {
            ...state,
            stocks: newStocks,
        }
    }
    if(action.type==='ADD_PURCHASE'){
        let purchase = action.purchase
        if (state.stocksPurchased[purchase.symbol]){
        return {
            ...state,
            stocksPurchased:{
                ...state.stocksPurchased,
                [purchase.symbol]: [
                    ...state.stocksPurchased[purchase.symbol], 
                    {   date:purchase.date, 
                        price: purchase.price, 
                        quantity:purchase.quantity, 
                        id:shortid.generate()
                    }
                ]    
            }
        }
        }else{
            return {
                ...state,
                stocksPurchased:{
                    ...state.stocksPurchased,
                    [purchase.symbol]: [
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
    if(action.type==='DELETE_PURCHASE'){
        let { symbol } = action
        let { id } = action
        const updateStocksPurchased = state.stocksPurchased[symbol].filter(item => item.id !== id)
        return{
            ...state,
            stocksPurchased:{
                ...state.stocksPurchased,
                [symbol]: updateStocksPurchased
                    
            }
        }
    }
    return state
}

export default userReducer
