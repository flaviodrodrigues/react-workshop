import React, { Component } from 'react';
import styled from 'styled-components';
import TodosList from './components/TodosList';
import { Container } from './components/ui';

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

  render() {
    return (
      <AppContainer>
        <AppHeader>
          <AppTitle>
            Welcome to React
          </AppTitle>
        </AppHeader>
        <Container>
          <TodosList todos={this.state.todos}/>
        </Container>
      </AppContainer>
    );
  }
}

export default App;
