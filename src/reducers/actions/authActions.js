import { getUserData } from './userActions'

export const signIn = (cred) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        dispatch({type: "SIGNIN_USER_PENDING"});
        firebase.auth().signInWithEmailAndPassword(cred.email,cred.password).then(cred => {
            dispatch({type: "SIGNIN_USER_SUCCESS"});
            console.log(cred)
            dispatch(getUserData(cred.user.uid));
        })
        .catch(err => dispatch({type: "ERROR_SIGNING_IN_USER", err: err}));
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        dispatch({ type: 'SIGNOUT_USER_PENDING'})
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_USER'})
        })
        .catch(err => dispatch({type: "ERROR_SIGNING_OUT_USER", err: err}));
    }
}