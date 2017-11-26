import {
	ADD_ADV, 
	REMOVE_ADV
	} from '../helpers/constants';

export function advertReducer(state = [], action){
	switch(action.type){
		case ADD_ADV:
		return [...state,{
			id: action.id,
			date: action.date,
			author: action.author,
			title: action.title,
			text: action.text
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

