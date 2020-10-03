import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions.js';

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
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((todo)=> {
        nextState[todo.id] = todo;
      })
      return nextState;
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
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