import React from "react";
// import todo_list_container from "./todos/todo_list_container";
import TodoListContainer from "./todos/todo_list_container";

const App = (props) => {
  console.log("App is rendering...")
  return (
      // <TodoListContainer store={props.store} ></TodoListContainer>
      <TodoListContainer ></TodoListContainer>
  )
}

export default App;