import React, { Component } from 'react';
import { Item, SquareButton } from './ui';

export default class TodoItem extends Component {
  render() {
    const {
      completed,
      text,
    } = this.props.todo;
    const {
      toggle,
      remove,
    } = this.props;

    return (
      <Item completed={completed}>
        <span onClick={toggle}>{text}</span>
        <SquareButton onClick={remove}>X</SquareButton>
      </Item>
    );
  }
}
