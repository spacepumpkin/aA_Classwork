import React from "react";

class TodoListItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
    this.title = this.props.todo.title;
  }

  handleDelete(e) {
    e.preventDefault();
    console.log(`Deleting todo: ${this.title}`);
    this.props.removeTodo(this.props.todo);
  }

  toggleDone(e) {
    e.preventDefault();
    console.log(`Toggling done: ${this.title}`);
    this.props.updateTodo(this.props.todo.id, "done", !this.props.todo.done);
  }

  render() {
    // console.log("rendering todo-list-item...")
    const { title, body, done } = this.props.todo;

    return (
      <li className={`todo-list-item ${done ? "done" : ""}`}>
        <strong>{title}</strong>
        <span>&nbsp;({body})&nbsp;</span>
        <button onClick={this.handleDelete} type="button">Delete</button>
        <button onClick={this.toggleDone} className={done ? "done" : "in-progress"} type="button">
          {done ? "Undo" : "Done"}
        </button>
      </li>
    )
  }
}
export default TodoListItem;