import axios from 'axios'

export const updateUserSettings = (type, data) => {
    return (dispatch, getState) => {
        dispatch({data: data, type: type});
        console.log(data)
        const uid = getState().auth.uid;
        const newData = getState().settings
        axios.post('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/updateUserSettings', {
            data: newData,
            uid: uid
          })
          .then(function (res) {
            if(res.data === "Successfully Added") {
                dispatch({type: 'USER_SETTINGS_UPDATED'})
            } else {
                console.log(res);
            }
          })
          .catch(function (err) {
            console.log(err);
          }); 
    }  
}