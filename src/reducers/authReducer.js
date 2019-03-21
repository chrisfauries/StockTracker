const initState = {
    status: 'logged Out',
    isAuth: false,
    uid: ''
}

const authReducer = (state = initState, action) => {
    if(action.type === 'LOGIN_USER_SENT') {
        return {
            ...state,
            status: 'pending'
        }
    }
    if(action.type === "LOGIN_USER_FULFILLED") {
        return {
            ...state,
            status: 'logged In',
            isAuth: true,
            uid: action.uid
        } 
    }
    if(action.type === "CREATING_NEW_USER") {
        return state; 
    }
    if(action.type === "NEW_USER_CREATED") {
        return state; 
    }
    if(action.type === "LOGIN_USER_ERROR") {
        return state;
    }
    if(action.type === "LOGOUT_USER") {
        return initState;
    }
    return state
}

export default authReducer