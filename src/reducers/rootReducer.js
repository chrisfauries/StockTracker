import { combineReducers } from 'redux'
import authReducer from './authReducer'
import userReducer from './userReducer'
import dataReducer from './dataReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import settingsReducer from './settingsReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    data: dataReducer,
    settings: settingsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer

})

export default rootReducer