import React, { Component } from 'react';
import Todos from '../containers/Todos';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Todos />
      </div>
    );
  }
}
