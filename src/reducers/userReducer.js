import shortid from 'shortid'

const initState = {
    stocks: [],
    stocksPurchased: {}
}

const userReducer = (state = initState, action) => {
    if(action.type === "LOGIN_USER_FULFILLED") {
        return {
            ...state,
            stocks: action.data.stocks,
            stocksPurchased: action.data.PurchasedStock,
        } 
    }
    if(action.type === "ADD_STOCK") {
        return {
            ...state,
            stocks: [...state.stocks, action.chart]
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
