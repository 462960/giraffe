import {createStore, compose, applyMiddleware} from 'redux';
import { rootReducer } from './reducers/rootReducer';
import {loadState} from './localStorage';

const persistedState = loadState();

const enhancers = compose(
window.devToolsExtension && window.devToolsExtension()
	);

export const store = createStore(
	rootReducer, 
	//persistedState, 
	enhancers
);