import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const rootReduer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReduer

