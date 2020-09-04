import widgetsReducer from './widgetsReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    widgets: widgetsReducer
});

export default reducers;