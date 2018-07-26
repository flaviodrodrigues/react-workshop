import React, { Component } from 'react';
import { Item, List } from './ui';

export default class TodosList extends Component {
  render() {
    const {
      todos
    } = this.props;

    return (
      <List>
        {todos.map(todo => <Item>{todo}</Item>)}
      </List>
    );
  }
}
