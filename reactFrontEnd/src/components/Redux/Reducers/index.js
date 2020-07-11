import isloggedReducer from './isLoggedReducer';

import {combineReducers} from 'redux'

export const rootReducers = combineReducers({
    loginResults: isloggedReducer
});