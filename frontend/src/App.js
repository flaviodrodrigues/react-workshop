import React, { Component } from 'react';
import styled from 'styled-components';
import TodosList from './components/TodosList';
import TodoForm from './components/TodoForm';
import { Container, FormContainer } from './components/ui';

const AppContainer = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const AppTitle = styled.h1`
  font-size: 1.5em;
`

class App extends Component {
  state = {
    todos: [
      {
        text: 'First todo',
        completed: true,
      },
      {
        text: 'This is awesome',
        completed: false,
      },
      {
        text: 'etc',
        completed: true,
      },
    ]
  }

  addTodo = (todo) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: todo,
          completed: false
        }
      ]
    });
  }

  render() {
    return (
      <AppContainer>
        <AppHeader>
          <AppTitle>
            Welcome to React
          </AppTitle>
        </AppHeader>
        <FormContainer>
          <TodoForm addTodo={this.addTodo} />
        </FormContainer>
        <Container>
          <TodosList todos={this.state.todos}/>
        </Container>
      </AppContainer>
    );
  }
}

export default App;
