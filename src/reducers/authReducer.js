const initState = {
    status: 'logged Out',
    error: false,
    isAuth: false,
    uid: ''
}

const authReducer = (state = initState, action) => {
    if(action.type === 'SIGNIN_USER_PENDING') {
        return {
            ...state,
            isAuth: true,
            error: false,
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
    if(action.type === "ERROR_SIGNING_IN_USER") {
        var message = (action.err.code === 'auth/user-not-found') ? 'Account does not exist. Please try a different email address or Sign up.' :
                      (action.err.code === 'auth/wrong-password') ? 'Incorrect Password. Please try again.' : 
                      (action.err.code === 'auth/too-many-requests') ? 'Too many Attempts. Please try again later.' : 'Unknown Error. Please try again.'
        return {
            ...state,
            error: true,
            status: message
        }
    }
    if(action.type === "SIGNOUT_USER") {
        return initState;
    }
    return state
}

export default authReducer