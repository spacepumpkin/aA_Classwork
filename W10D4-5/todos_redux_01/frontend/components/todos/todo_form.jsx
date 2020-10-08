import React from "react";
import {todoUtils} from "../../util/todo_utils.js";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    // State is a todo object; initial state:
    this.state = {
      id: todoUtils.uniqueId(), // Math.floor(Math.random() * 10000),
      title: "",
      body: "",
      done: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateTitle = this.updateTitle.bind(this);
    // this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = this.state;
    this.props.receiveTodo(todo);

    this.setState({
      id: todoUtils.uniqueId(), // Math.floor(Math.random() * 10000),
      title: "",
      body: ""
    })
  }

  update(field) {
    // e.preventDefault();
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  // updateTitle(e) {
  //   // e.preventDefault();
  //   this.setState({ title: e.target.value });
  // }

  // updateBody(e) {
  //   // e.preventDefault();
  //   this.setState({ body: e.target.value })
  // }

  render() {
    console.log("rendering todo-form...")
    return (
      <form onSubmit={this.handleSubmit} className="todo-form">
        <label htmlFor="title">Title: </label>
        <input
          onChange={this.update("title")}
          value={this.state.title}
          type="text"
          id="title"
          required />
        <label htmlFor="body">Body: </label>
        <textarea
          onChange={this.update("body")}
          value={this.state.body}
          id="body"
          cols="30" rows="5"
          placeholder="Enter Description">
        </textarea>
        <input type="submit" value="Add Todo!" />

      </form>
    )
  }

}



export default TodoForm;