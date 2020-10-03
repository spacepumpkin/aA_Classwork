import {connect} from 'react-redux';
import todoList from './todo_list.jsx';
import allTodos from '../../reducers/selectors';
import { receiveTodo, receiveTodos } from "../../actions/todo_actions"

const mapStateToProps = (state) => {
    const todos = allTodos(state);
    return ({
        todos: todos
    })
}

const mapDispatchToProps = (dispatch) => {
  return ( {
    receiveTodo: (todo) => ( dispatch(receiveTodo(todo)) )
  })
}




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