import { 
  RECEIVE_TODO, 
  RECEIVE_TODOS, 
  REMOVE_TODO, 
  UPDATE_TODO } from '../actions/todo_actions.js';

// Test Cases 
const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (prevState = initialState, action) => {
  Object.freeze(prevState);
  const nextState = Object.assign({}, prevState); // shallow dup (But ok with .freeze?)
  // nextState = JSON.parse(JSON.stringify(prevState)); // deep dup

  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((todo)=> {
        nextState[todo.id] = todo;
      })
      return nextState;

    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;

    case REMOVE_TODO:
      delete nextState[action.todo.id];
      return nextState;

    case UPDATE_TODO:
      const field = action.field;
      nextState[action.todoId][field] = action.value;
      // debugger
      return nextState;

    default:
      return prevState;
  }
}

export default todosReducer;

// action: {
// type: RECEIVE_TODO,
//   todo: {
//     id: 1,
//       title: 'wash car',
//         body: 'with soap',
//           done: false
//   }

// action: {
// type: RECEIVE_TODOS,
//   todos: [
//    {
//     id: 1,
//       title: 'wash car',
//         body: 'with soap',
//           done: false
//   },
//   {
//     id: 2,
//       title: 'wash dog',
//         body: 'with shampoo',
//           done: true
//   }
// ]
// }