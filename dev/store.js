import { loadState } from "./helpers/localStorage";
import { rootReducer } from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const persistedState = loadState();

export const store = createStore(
	rootReducer,
	persistedState,
	composeWithDevTools()
);
