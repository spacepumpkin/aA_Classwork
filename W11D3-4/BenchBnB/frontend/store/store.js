import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";

import thunk from "../util/thunk";
import logger from "redux-logger";

const configureStore = function (preloadedState = {}) {
  console.log("configuring store...");
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
};

export default configureStore;