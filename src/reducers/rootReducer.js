import { combineReducers } from 'redux'
import authReducer from './authReducer'
import userReducer from './userReducer'
import dataReducer from './dataReducer'
import settingsReducer from './settingsReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    data: dataReducer,
    settings: settingsReducer
})

export default rootReducer