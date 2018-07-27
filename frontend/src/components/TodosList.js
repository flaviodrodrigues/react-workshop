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
        {todos.map((todo, index) => <TodoItem key={index} todo={todo} toggle={() => toggleTodo(index)} remove={() => removeTodo(index)} />)}
      </List>
    );
  }
}
