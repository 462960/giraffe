import {v4} from 'node-uuid';

// Add product
export function addProduct( name, red, green, blue){
	return {
		type: 'ADD_PROD',
		id: v4(),
		name,
		red,
		green,
		blue
	}
};

// Remove product
export function removeProduct(id, i){
	return{
		type: 'REMOVE_PROD',
		id,
		i
	}
};