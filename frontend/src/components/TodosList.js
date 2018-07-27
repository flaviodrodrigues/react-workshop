import React, { Component } from 'react';
import { List } from './ui';
import TodoItem from './TodoItem';

export default class TodosList extends Component {
  render() {
    const {
      todos
    } = this.props;

    return (
      <List>
        {todos.map(todo => <TodoItem todo={todo} />)}
      </List>
    );
  }
}
