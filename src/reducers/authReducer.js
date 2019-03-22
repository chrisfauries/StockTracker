const initState = {
    status: 'logged Out',
    isAuth: false,
    uid: ''
}

const authReducer = (state = initState, action) => {
    if(action.type === 'SIGNIN_USER_PENDING') {
        return {
            ...state,
            isAuth: true,
            status: 'pending'
        }
    }
    if(action.type === "SIGNIN_USER_SUCCESS") {
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
    if(action.type === "SIGNOUT_USER") {
        return initState;
    }
    return state
}

export default authReducer