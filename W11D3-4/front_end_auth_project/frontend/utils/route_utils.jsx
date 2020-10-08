import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mSP = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  }
}

// Auth Route -- redirect if logged in

// Eventually want <AuthRoute path="" component={} />
const Auth = ({ loggedIn, path, component: Component }) => {
  return (
    <Route
      path={path}
      render={(props) => (
        loggedIn ? <Redirect to="/" /> : <Component {...props} />
      )}
    />
  )
};

// Protected Route -- redirect if logged out

const Protected = ({ loggedIn, path, component: Component }) => {
  return (
    <Route
      path={path}
      render={(props) => (
        loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
      )}
    />
  )
};

export const AuthRoute = withRouter(connect(mSP)(Auth));
export const ProtectedRoute = withRouter(connect(mSP)(Protected));