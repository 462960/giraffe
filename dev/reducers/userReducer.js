import { ADD_USER, AUTH_USER, LOGOUT_USER } from "../action/constants";

export function userReducer(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          pass: action.pass
        }
      ];
    default:
      return state;
  }
  return state;
}

export function authReducer(state = [], action) {
  switch (action.type) {
    case AUTH_USER:
      return [
        ...state,
        {
          name: action.name
        }
      ];
    case LOGOUT_USER:
      return [...state.slice(0, action.name)];
    default:
      return state;
  }
  return state;
}
