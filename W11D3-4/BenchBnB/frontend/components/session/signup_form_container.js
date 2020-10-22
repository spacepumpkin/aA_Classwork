// same as LoginFormContainer except for formType and processForm

import { connect } from "react-redux";
import SessionForm from "./session_form"

// import signup
import { signup } from "../../actions/session_actions";


const mSP = function({errors: {session: sessionErrors}}, ownProps) {
  console.log("mSP (signup) to SessionForm");
  return {
    errors: sessionErrors,
    formType: "signup",
  }
}

const mDP = function(dispatch) {
  console.log("mDP (signup) to SessionForm");
  return {
    processForm: function(user) {dispatch(signup(user))}
  }
}

export default connect(mSP, mDP)(SessionForm);

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