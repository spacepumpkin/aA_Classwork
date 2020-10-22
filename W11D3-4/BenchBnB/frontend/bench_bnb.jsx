"use strict";

import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import Root from "./components/root";

// for testing:
import * as APIUtils from "./util/session_api_util";
import * as sessionActions from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  console.log("rendering ReactDOM...");

  ReactDOM.render(<Root store={store}/>, root);

  // TESTING START
  // APIUtils 
  window.postUser = APIUtils.postUser; // pass
  window.postSession = APIUtils.postSession; // pass
  // window.deleteSession = APIUtils.deleteSession; // pass

  // Store
  window.dispatch = store.dispatch; // pass
  window.getState = store.getState; // pass

  // Session Actions
  window.signup = sessionActions.signup;
  window.login = sessionActions.login;
  window.logout = sessionActions.logout;
  // TESTING END
});