import requestHandler from './../../utils/requestHandler';
import widgetsData from '../../config/widgets/dashboardWidgets';

export const initWidgets = ({ route }) => {
    return dispatch => {
        requestHandler({ action: 'getWidgets', data: { route } })
            .then(res => { 
                dispatch({ 
                    type: 'SET_WIDGETS',
                    payload: { route, data: res.data ? res.data : widgetsData }
                }) 
            })
            .catch(err => {
                console.log(err);
                dispatch({ 
                    type: 'SET_WIDGETS',
                    payload: { route, data: widgetsData }
                }) 
            })
    }
}

export const updateWidgets = (data) => {
    return dispatch => {
        requestHandler({ action: 'setWidgets', data })
            .then(res => { 
                dispatch({ 
                    type: 'SET_WIDGETS',
                    payload: data
                }) 
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const resetWidgets = ({ route }) => {
    let data = { route, data: widgetsData };
    return dispatch => {
        requestHandler({ action: 'setWidgets', data })
            .then(res => { 
                dispatch({ 
                    type: 'RESET_WIDGETS',
                    payload: data
                }) 
            })
            .catch(err => {
                console.log(err);
            })
    }
}