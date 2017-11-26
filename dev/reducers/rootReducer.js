import { combineReducers } from 'redux';
import { userReducer, authReducer } from './userReducer';
import { advertReducer } from './advertReducer';


export const rootReducer = combineReducers({
	userReducer,
	authReducer,
	advertReducer
});