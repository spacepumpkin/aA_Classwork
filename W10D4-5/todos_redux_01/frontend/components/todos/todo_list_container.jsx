import { connect } from 'react-redux';
import TodoList from './todo_list.jsx';
import allTodos from '../../reducers/selectors';
import { receiveTodo, receiveTodos, removeTodo, updateTodo } from "../../actions/todo_actions"

const mapStateToProps = (state) => {
  console.log("todo-list container is mapping state to props...");
  const todos = allTodos(state);
  return ({
    todos: todos
  })
}

const mapDispatchToProps = (dispatch) => {
  console.log("todo-list container is mapping dispatch to props...");
  return ({
    receiveTodo: (todo) => (dispatch(receiveTodo(todo))),
    removeTodo: (todo) => (dispatch(removeTodo(todo))),
    updateTodo: (todoId, field, value) => (dispatch(updateTodo(todoId, field, value)))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);



// const mapDispatchToProps = (dispatch) => {
//     debugger
//     return({
//       fetchAllShirts: () => {
//         debugger
//         return dispatch(fetchAllShirts());
//       },
//       createShirt: (shirt) => {
//         debugger
//         return dispatch(createShirt(shirt))
//       }
//     }) //takes in a shirt object and then dispatch the the result of receiveShirt action
//   }
// export