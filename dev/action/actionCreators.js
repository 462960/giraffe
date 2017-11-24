import {v4} from 'node-uuid';
import {
	ADD_USER, 
	AUTH_USER, 
	LOGOUT_USER, 
	ADD_ADV, 
	REMOVE_ADV,
	} from '../constants';

// Add user
export function addUser( name, pass){
	return {
		type: ADD_USER,
		id: v4(),
		name,
		pass
	}
};

// Authorise user
export function authUser(id){
	return {
		type: AUTH_USER,
		id
	}
};

// Logout user
export function logoutUser(id){
	return {
		type: LOGOUT_USER,
		id
	}
};

// Add adv
export function addAdv( title, description){
	return {
		type: ADD_USER,
		id: v4(),
		title,
		description
	}
};

// Remove adv
export function removeAdv(id, i){
	return{
		type: REMOVE_ADV,
		id,
		i
	}
};