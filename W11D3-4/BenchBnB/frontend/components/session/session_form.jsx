import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    // state governed by user interface
    this.state = {
      username: "",
      password: ""
    }
  }

  handleInput(type) {
    return (e) => {
      
    }
  }

  handleSubmit(formtype) {

  }

  render() {
    console.log("rendering SessionForm...");

    const buttonText = (this.props.formType === "signup") ? (
      "Sign Up"
    ) : (
      "Log In"
    );

    return (
      <div className="session-form">
        <h2> Welcome to BenchBnB!</h2>
        <h2> Please {this.props.formType} or </h2>
        <form>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput("username")}
            />
          </label>
          {/* <label>Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
          </label> */}
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
          </label>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>

        <button
          onClick={this.props.processForm(Object.assign({}, this.state))}>
          {this.props.formType}
        </button>
      </div>
    )
  }


}

export default SessionForm;