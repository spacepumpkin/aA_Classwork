import { combineReducers } from "redux";
import usersReducer from "./users_reducer";

console.log("in entitiesReducer");

const entitiesReducer = combineReducers({
  users: usersReducer,
})

export default entitiesReducer;

// entities: {
//   users: {

//   }
// }