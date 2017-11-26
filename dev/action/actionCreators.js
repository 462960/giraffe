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
const date = new Date().toLocaleDateString();
export function addAdv(author, title, text){
	return {
		type: ADD_ADV,
		id: v4(),
		date,
		author,
		title,
		text
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