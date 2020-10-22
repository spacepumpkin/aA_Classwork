import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();
    // this.props.logout().then( () => {
    //   this.props.history.push("/")
    // });
  }

  render() {
    console.log("rendering Greeting...")
    const display = this.props.currentUser ? (
      <>
        <h2> Hello {this.props.currentUser.username} </h2>
        <button onClick={this.props.logout}> Log Out </button>
      </>
    ) : (
        <>
          <Link to="/signup" className="btn"> Sign Up </Link>
          <Link to="/signin" className="btn"> Log In </Link>
        </>
      );

    return (
      <div>
        {display}
      </div>
    )
  }
}

export default Greeting;