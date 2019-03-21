import { settings } from '../config/settings.js'

const initState = {
    general: settings.general,
    chart: settings.chart,
    layout: settings.layout,
    other: settings.other
}

const settingsReducer = (state = initState, action) => {
    if(action.type === "SIGNOUT_USER") {
        return initState;
    }
    if(action.type === "USER_DATA_RECEIVED") {
        return {
            ...state,
            general: action.data.general,
            chart: action.data.chart,
            layout: action.data.layout,
            other: action.data.other                
        }
    }
    if(action.type === 'UPDATE_GENERAL_SETTINGS'){
        let general = action.data
        return {
            ...state,
            user:{
                ...state.user,
                general: general
            }
        }
    }
    return state
}

export default settingsReducer