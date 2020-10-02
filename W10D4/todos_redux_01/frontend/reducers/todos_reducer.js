import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions.js';

const todosReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((todo, i) => {
        nextState[todo.id] = todo;
      })
      // return nextState?
      break;
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      // return nextState?
    default:
      return prevState;
  }
}

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