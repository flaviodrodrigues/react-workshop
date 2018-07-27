import EditTodo from '../components/EditTodo';
import { connect } from 'react-redux';
import { updateTodo } from '../actions/todos';

const mapStateToProps = (state, props) => {
  const {
    id,
  } = props;

  return {
    todo: state.todos.items.find((todo) => todo.id == id),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTodo: (id, text) => dispatch(updateTodo(id, text)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditTodo);
