import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer"

console.log("in errorsReducer");

const errorsReducer = combineReducers({
  session: sessionErrorsReducer
})

export default errorsReducer;

// errors: {
//   session: []
// }