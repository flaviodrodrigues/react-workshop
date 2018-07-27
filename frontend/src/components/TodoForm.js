import React, { Component } from 'react';
import { Input } from './ui';

export default class TodoForm extends Component {

  state = {
    text: '',
  }

  componentDidMount() {
    this.setState({
      text: this.props.text || '',
    })
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  onKeyPress = (e) =>  {
    if(e.key === 'Enter') {
      this.submit();
    }
  }

  submit() {
    this.setState({
      text: '',
    });

    this.props.addTodo(this.state.text);
  }

  render() {
    return (
      <Input type="text" value={this.state.text} onChange={this.handleChange} onKeyPress={this.onKeyPress} />
    );
  }
}
