import {
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";

const usersReducer = function (prevState = {}, action) {
  Object.freeze(prevState);
  console.log("in usersReducer");

  switch (action.type) {
    case (RECEIVE_CURRENT_USER):
      return Object.assign(
        {},
        prevState,
        { [action.user.id]: action.user }
      )
    default:
      return prevState;
  }
}

export default usersReducer;

// users: {
//   1: {
//     id: 1,
//     username: ""
//   },
// }