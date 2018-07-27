import React, { Component } from 'react';
import { FormContainer } from './ui';
import TodoForm from '../components/TodoForm';

export default class EditTodo extends Component {
  
  updateTodo = (text) => {
    const {
      id,
    } = this.props.todo;

    this.props.updateTodo(id, text);
  }

  render() {
    const {
      text,
    } = this.props.todo;

    return (
      <FormContainer>
        <TodoForm text={text} addTodo={this.updateTodo} />
      </FormContainer>
    );
  }
}
