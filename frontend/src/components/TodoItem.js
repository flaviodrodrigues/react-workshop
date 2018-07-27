import React, { Component } from 'react';
import { Item, SquareButton } from './ui';

export default class TodoItem extends Component {
  render() {
    const {
      completed,
      text,
    } = this.props.todo;

    return (
      <Item completed={completed}>
        <span>{text}</span>
        <SquareButton>X</SquareButton>
      </Item>
    );
  }
}
