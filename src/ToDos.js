import React, { Component } from 'react';
import './styles/App.css';
import ToDo from './ToDo';
let todos = [];

class ToDos extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value});
  }

  handleClick(e) {
    if(e.key === "Enter") {
      todos.push({
        text: e.target.value,
        complete: false,
        index: todos.length === 0 ? 0 : todos.length,
      });
      if ((typeof(Storage) !== "undefined")) {
        sessionStorage.setItem("todos", JSON.stringify(todos));
      }
      this.setState({ value: ''});
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div>
      <input
         maxLength="60"
         id="addtodo"
         className="addtodo"
         placeholder="Add a to-do"
         type="text"
         onChange={this.handleChange}
         onKeyPress={this.handleClick}
         value={value}
      />
      <ToDo />
      </div>
    );
  }
}

export default ToDos;
