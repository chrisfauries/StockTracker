const initState = {
    user: {
        status: 'logged Out',
        isAuth: false,
        uid: '',
        stocks: [],
        liveStockData: []
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

    return state;
}

export default rootReducer