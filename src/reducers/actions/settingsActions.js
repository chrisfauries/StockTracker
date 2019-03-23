export const updateUserSettings = (type, data) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({type: type, data: data});
        const fs = getFirestore();
        const uid = getState().firebase.auth.uid
        const settings = getState().settings
        fs.collection('Users').doc(uid).update({
            general: settings.general,
            chart: settings.chart,
            layout: settings.layout,
            other: settings.other
        })
        .then(res => {
            dispatch({type: "USER_SETTINGS_UPDATED"})
        })
        .catch(err => dispatch({type: "ERROR_UPDATING_USER_SETTINGS", err: err}));
    }
}



