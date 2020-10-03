
// receive state obj containing todos obj holding indiv todo obj's
const allTodos = (state) => {
  // get keys of state.todos (todo ids)
  // [1, 2, 4, 5, 3]
  // [{id: 1}, {id: 2}, {id:4}]
  // return Object.values(state.todos); // [{}, {}]
  let todoIds = Object.keys(state.todos); // arr of todo ids
  return todoIds.map( (todoId) => {
    return state.todos[todoId] // map to todo obj
  }) 

}

// state = {
//   todos: {
//     1: {
//       id: 1,
//       title: "wash car",
//       body: "with soap",
//       done: false
//     },
//     2: {
//       id: 2,
//       title: "wash dog",
//       body: "with shampoo",
//       done: true
//     }
//   }
// }

export default allTodos;