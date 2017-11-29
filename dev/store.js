import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { loadState } from './helpers/localStorage';

const persistedState = loadState();

// Data for demonstration purpose
import { advertReducer } from './data/adverts';
import { userReducer } from './data/users';
const defaultState = {
  advertReducer,
  userReducer
};

const enhancers = compose(
  window.devToolsExtension && window.devToolsExtension()
);

export const store = createStore(
  rootReducer,
  //defaultState, 
  //persistedState, 
  enhancers
);