import {
  postUser,
  postSession,
  deleteSession,
} from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

// THUNK actions --------------------------------------------------------

// create user in backend, then add current user to state
export const signup = function (formUser) {
  console.log("in signup thunk action");
  return function (dispatch) {
    console.log("signup thunk -> posting new user");
    return (
      postUser(formUser).then((user) => {
        dispatch(receiveCurrentUser(user))
      })
    )
  }
};

// log user in backend, then add current user to state
export const login = function (formUser) {
  console.log("in login thunk action");
  return function (dispatch) {
    console.log("login thunk -> posting new session");
    return (
      postSession(formUser).then((user) => {
        dispatch(receiveCurrentUser(user))
      })
    )
  }
};

// logout user in backend, and remove
export const logout = function () {
  console.log("in logout thunk action");
  return function (dispatch) {
    console.log("logout thunk -> deleting session");
    return (
      deleteSession().then(() => {
        dispatch(logoutCurrentUser())
      })
    )
  }
};


// REGULAR actions --------------------------------------------------------

// sends currentUser to reducers (add to users and sessions slices)
const receiveCurrentUser = function (user) {
  console.log("in receiveCurrentUser action");
  return ({
    type: RECEIVE_CURRENT_USER,
    user
  })
};

// remove currentUser from session slice in state
const logoutCurrentUser = function () {
  console.log("in logoutCurrentUser action");
  return ({
    type: LOGOUT_CURRENT_USER,
  })
};

// accepts errors array
const receiveErrors = function (errors) {
  console.log("in receiveErrors action");
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  })
};
