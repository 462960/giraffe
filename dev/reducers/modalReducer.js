import { SHOW_MODAL, HIDE_MODAL } from "../action/constants";

export function modalReducer(state = [], action) {
  switch (action.type) {
    case "SHOW_MODAL":
      return [
        ...state,
        {
          name: action.name,
          i: action.i
        }
      ];
    case "HIDE_MODAL":
      return [...state.slice(0, action.name)];
    default:
      return state;
  }
}
