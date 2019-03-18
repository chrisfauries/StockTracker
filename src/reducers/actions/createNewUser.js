import axios from 'axios'

export const createNewUser = (data) => {
    return (dispatch, getState) => {
        dispatch({type: "CREATING_NEW_USER"});
        axios.post('https://us-central1-stock-tracker-d5b73.cloudfunctions.net/createNewUser', {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            uid: data.uid
          })
          .then(function (res) {
            if(res.data === "Document successfully written!") {
                dispatch({type: "NEW_USER_CREATED"});
                dispatch({type: "LOGIN_USER_FULFILLED", uid: data.uid, payload: {stocks: []}});
            } else {
                console.log(res);
            }
          })
          .catch(function (err) {
            console.log(err);
          });
        
    }  
   
}