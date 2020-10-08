import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session";

// default session state slice
const _nullSession = {
  currentUser: null,
};

// it'll know that it's sessionReducer from the filename??
export default ( prevState = _nullSession, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.user });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return prevState;
  }
}