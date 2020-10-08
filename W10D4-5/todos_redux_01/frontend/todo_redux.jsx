import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store.js";
import { receiveTodos, receiveTodo } from './actions/todo_actions.js';

import Root from "./components/root.jsx";
import allTodos from "./reducers/selectors.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("React is starting at root element...")
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  ReactDOM.render(<Root store={store}/>, root);
})
