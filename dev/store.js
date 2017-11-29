import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { loadState } from './helpers/localStorage';

const persistedState = loadState();

// Dummi data
import { advertReducer } from './data/adverts';
import { userReducer } from './data/users';

const initialState = {
  advertReducer,
  userReducer
}

const enhancers = compose(
  window.devToolsExtension && window.devToolsExtension()
);

export const store = createStore(
  rootReducer,
  //persistedState, 
  initialState,
  enhancers
);