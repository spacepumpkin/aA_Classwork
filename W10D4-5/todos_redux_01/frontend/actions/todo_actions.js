export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

// action creator that accepts array todos
export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  }
};

// action creator that accepts single todo
export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo: todo
  }
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo: todo
  }
}

export const updateTodo = (todoId, field, value) => {
  return {
    type: UPDATE_TODO,
    todoId: todoId,
    field: field,
    value: value
  }
}

// export { 
//   RECEIVE_TODO, 
//   RECEIVE_TODOS, 
//   REMOVE_TODO, 
//   receiveTodo, 
//   receiveTodos,
//   removeTodo
// };

// trying to mix ES5 and ES6 exports

// remove todo
// let exports = {};
// exports.receiveTodo = receiveTodo; // this adds receiveTodo into module.exports
// module.exports = { receiveTodos, receiveTodo };
// module.exports = Object.assign(exports, otherExports);
// console.log(module.exports);
// console.log(exports);