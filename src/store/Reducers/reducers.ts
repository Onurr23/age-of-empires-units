import { combineReducers } from 'redux';
import unitsDataReducer from '../unitsData/unitsDataReducer';

const rootReducer = combineReducers({
    unitsReducer: unitsDataReducer
});

export default rootReducer;
