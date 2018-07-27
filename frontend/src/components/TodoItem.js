import React, { Component } from 'react';
import { Item, Button, SquareButton } from './ui';
import { Link } from '@reach/router';

export default class TodoItem extends Component {
  render() {
    const {
      completed,
      text,
      id,
    } = this.props.todo;
    const {
      toggle,
      remove,
    } = this.props;

    return (
      <Item completed={completed}>
        <Link to={`edit/${id}`}>
          <span>{text}</span>
        </Link>
        <div>
          <Button onClick={toggle}>{completed ? 'Not Done' : 'Done'}</Button>
          <SquareButton onClick={remove}>X</SquareButton>
        </div>
      </Item>
    );
  }
}
