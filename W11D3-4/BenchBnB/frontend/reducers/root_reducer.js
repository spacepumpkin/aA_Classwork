import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import sessionReducer from "./session_reducer";

console.log("in rootReducer");

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer
})

export default rootReducer;

// State = {
//   entities: {
//     users: {
//     }
//   },
//   session: {
//     id: null,
//   },
//   errors: {
//     session: [],
//   }
// }