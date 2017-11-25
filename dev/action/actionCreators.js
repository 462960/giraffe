import {v4} from 'node-uuid';
import {
	ADD_USER, 
	AUTH_USER, 
	LOGOUT_USER, 
	ADD_ADV, 
	REMOVE_ADV,
	} from '../helpers/constants';

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
export function authUser(name){
	return {
		type: AUTH_USER,
		name
	}
};

// Logout user
export function logoutUser(name){
	return {
		type: LOGOUT_USER,
		name
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