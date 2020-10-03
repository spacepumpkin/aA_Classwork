
import {createStore} from "redux";
import rootReducer from "../reducers/root_reducer"

const configureStore = (preloadedState = {}) => {
  console.log("configuring store...")
  return createStore(rootReducer, preloadedState)
}

export default configureStore;