import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from "../actions/session_actions";

const sessionErrorsReducer = function (prevState = [], action) {
  Object.freeze(prevState);
  console.log("in sessionErrorsReducer");

  switch (action.type) {
    case (RECEIVE_SESSION_ERRORS):
      return [action.errors];
    case (RECEIVE_CURRENT_USER):
      return [];
    default:
      return prevState;
  }
}

export default sessionErrorsReducer;

// errors: {
//   session: []
// }