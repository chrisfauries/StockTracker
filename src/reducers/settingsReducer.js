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
    if(action.type === 'UPDATING_GENERAL_SETTINGS'){
        let general = action.data
        return {
            ...state,
            general: general
        }
    }
    if(action.type === 'UPDATING_CHART_SETTINGS'){
        let chart = action.data
        return {
            ...state,
            chart: {
                ...state.chart,
                line: {
                    ...state.chart.line,
                    colorFill: chart.colorFill,
                    colorLine: chart.colorLine,
                    point: chart.point,
                    tooltipsEnabled: chart.tooltipsEnabled
                }
            }
        }
    }
    return state
}

export default settingsReducer