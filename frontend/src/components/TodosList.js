import React, { Component } from 'react';
import { List } from './ui';
import TodoItem from './TodoItem';

export default class TodosList extends Component {
  render() {
    const {
      todos,
      toggleTodo,
      removeTodo,
    } = this.props;

    return (
      <List>
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} toggle={() => toggleTodo(todo.id)} remove={() => removeTodo(todo.id)} />)}
      </List>
    );
  }
}
