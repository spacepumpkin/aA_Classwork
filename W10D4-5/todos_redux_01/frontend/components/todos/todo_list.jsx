import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

const TodoList = (props) => {
  console.log("rendering todo list...");
  console.log(props);
  return (
    // <h3> Todo List goes here! </h3>
    <div>
      <ul className="todo-list">
        {props.todos.map((todo, todoIdx) => {
          console.log(todo)
          return (
            <TodoListItem
              key={todoIdx}
              todo={todo}
              removeTodo={props.removeTodo}
              updateTodo={props.updateTodo}
            />
          )
        })}
      </ul>
      <TodoForm receiveTodo={props.receiveTodo} />
    </div>
  )
}

export default TodoList;


// const initialState = {
//   1: {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },