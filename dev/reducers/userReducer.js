import {
	ADD_USER, 
	ADD_ADV, 
	REMOVE_ADV
	} from '../constants';

export function userReducer(state = [], action){
	switch(action.type){
		case ADD_USER:
		return [...state,{
			id: action.id,
			name: action.name,
			pass: action.pass
			}];
		case ADD_ADV:
		return [...state,{
			id: action.id,
			title: action.title,
			description: action.description
			}];
		case REMOVE_ADV:
		return [
		...state.slice(0,action.i),
		...state.slice(action.i + 1)

		];
		default:
		return state;
	}
	return state;
};