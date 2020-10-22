import { connect } from "react-redux";
import Greeting from "./greeting";

import { logout } from "../actions/session_actions";

// destructure what we need from State
const mSP = function({entities: {users: users}, session: {id: currentUserId}}) {
  console.log("mSP for Greeting");
  return ({
    currentUser: users[currentUserId],
  })
}

const mDP = function(dispatch) {
  console.log("mDP for Greeting")
  return ({
    logout: function() {dispatch(logout())},
  })
}

export default connect(mSP, mDP)(Greeting);

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