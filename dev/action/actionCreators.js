import {v4} from 'node-uuid';
import {
	ADD_USER, 
	ADD_ADV, 
	REMOVE_ADV
	} from '../constants';

// Add user
// export function addUser(){
// 	return(dispatch, getState) => {
// 		const form = getState().form;
// 		const user = {
// 		id: v4(),
// 		name: form.regUser.name.value,
// 		pass: form.regUser.password.value
// 	};
// 	dispatch({
// 		type: ADD_USER,
// 		user
// 	});
// }
// };

export function addUser( name, pass){
	//const form = getState().form;
	return {
		type: ADD_USER,
		id: v4(),
		name,
		pass
	}
	console.log('I am addUser');
};

// Add adv
// export function addAdv( title, description){
// 	return {
// 		type: ADD_USER,
// 		id: v4(),
// 		title,
// 		description
// 	}
// };

// Remove adv
// export function removeAdv(id, i){
// 	return{
// 		type: REMOVE_ADV,
// 		id,
// 		i
// 	}
// };