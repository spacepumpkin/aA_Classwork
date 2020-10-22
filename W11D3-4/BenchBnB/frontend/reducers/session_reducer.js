import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

// default session w/ no current user
const _nullSession = {
  id: null
}

const sessionReducer = function (prevState = _nullSession, action) {
  Object.freeze(prevState);
  console.log("in sessionReducer");

  switch (action.type) {
    case (RECEIVE_CURRENT_USER):
      console.log("receiving current user");
      return ({ "id": action.user.id });
    case (LOGOUT_CURRENT_USER):
      console.log("logging out current user");
      return _nullSession;
    default:
      return prevState;
  }
}

export default sessionReducer;

// session: {
//   id: null
// }