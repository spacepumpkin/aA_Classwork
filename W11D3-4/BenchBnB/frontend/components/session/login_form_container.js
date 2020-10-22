// same as SignupFormContainer except for formType and processForm

import { connect } from "react-redux";
import SessionForm from "./session_form"

// import login
import { login } from "../../actions/session_actions";


const mSP = function ({ errors: { session: sessionErrors } }, ownProps) {
  console.log("mSP (login) to SessionForm");
  return {
    errors: sessionErrors,
    formType: "login",
  }
}

const mDP = function (dispatch) {
  console.log("mDP (login) to SessionForm");
  return {
    processForm: function (user) { dispatch(login(user)) }
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