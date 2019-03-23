import { getUserData } from './userActions'

export const signIn = (cred) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        dispatch({type: "SIGNIN_USER_PENDING"});
        firebase.auth().signInWithEmailAndPassword(cred.email,cred.password).then(cred => {
            dispatch({type: "SIGNIN_USER_SUCCESS"});
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
            setTimeout(() => {dispatch({ type: 'SIGNOUT_USER'})},300)
        })
        .catch(err => dispatch({type: "ERROR_SIGNING_OUT_USER", err: err}));
    }
}

export const signUp = (data) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        dispatch({type: "SIGNUP_USER_PENDING"});
        firebase.auth().createUserWithEmailAndPassword(data.email,data.password).then(cred => {
            const fs = getFirestore();
            const settings = getState().settings
            fs.collection('Users').doc(cred.user.uid).set({
                general: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    userName: data.userName
                },
                email: data.email,
                stocks: [],
                PurchasedStock: {},
                chart: settings.chart,
                layout: settings.layout,
                other: settings.other
            })
            dispatch({type: "SIGNUP_USER_SUCCESS"});
            dispatch(getUserData(cred.user.uid));
        })
        .catch(err => dispatch({type: "ERROR_SIGNING_UP_USER", err: err}));
    }
}

export const changePassword = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        dispatch({type: "SENDING_EMAIL_TO_CHANGE_USER_PASSWORD"});
        const auth = getState().firebase.auth
        firebase.auth().sendPasswordResetEmail(auth.email).then(() => {
            dispatch({type: "CHANGE_PASSWORD_EMAIL_SENT"});
        })
        .catch(err => dispatch({type: "ERROR_SENDING_PASSWORD_CHANGE_EMAIL", err: err}));
    }
}