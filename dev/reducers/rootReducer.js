import { combineReducers } from "redux";
import { userReducer, authReducer } from "./userReducer";
import { advertReducer } from "./advertReducer";
import { modalReducer } from "./modalReducer";

export const rootReducer = combineReducers({
  userReducer,
  authReducer,
  advertReducer,
  modalReducer
});
