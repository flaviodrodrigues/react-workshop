import React, { Component } from 'react';
import TodosList from './TodosList';
import TodoForm from './TodoForm';
import { Container, FormContainer } from './ui';

export default class Todos extends Component {

  componentWillMount() {
    this.props.addTodo('Frist todo');
    this.props.addTodo('Redux is awesome');
  }

  render() {
    const {
      todos,
      addTodo,
      toggleTodo,
      removeTodo,
    } = this.props;

    return (
      <React.Fragment>
        <FormContainer>
          <TodoForm
            addTodo={addTodo}
          />
        </FormContainer>
        <Container>
          <TodosList
            todos={todos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        </Container>
      </React.Fragment>
    );
  }
}
