import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../actions/todos';

const mapStateToProps = (state) => {
  return {
    todos: state.todos.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
    removeTodo: (id) => dispatch(removeTodo(id)),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todos);
