import React, { Component } from 'react';
import './styles/todo.css';

class ToDo extends Component {
  constructor() {
   super();
   this.state = {
     tmp : '',
   }
  }

  getToDos() {
    if (typeof(Storage) !== "undefined") {
      const todos = JSON.parse(sessionStorage.getItem("todos"));
      return todos;
    } else {
      return [];
    }
  }

  handleComplete(index) {
    if (typeof(Storage) !== "undefined") {
      const todos = JSON.parse(sessionStorage.getItem("todos"));
      const todo = todos.filter(todo => todo.index === index);
      todo[0].complete = true;
      sessionStorage.setItem("todos", JSON.stringify(todos));
    }
    this.setState({ tmp: ''});
  }

  handleDelete(index) {
    if (typeof(Storage) !== "undefined") {
      const todos = JSON.parse(sessionStorage.getItem("todos"));
      todos.splice(index, 1);
      sessionStorage.setItem("todos", JSON.stringify(todos));
    }
    this.setState({ tmp: ''});
  }

  renderToDo(todo, index) {
    const todotext = todo.complete ? 'todotext complete' : 'todotext';
    const todoList = todo.complete ? 'todo completetodo' : 'todo';
    return (
      <li
        key={index}
      >
        <span className="cross" onClick={this.handleDelete.bind(this, index)}></span>
        <span className="tick" onClick={this.handleComplete.bind(this, index)}></span>
        <span className={todotext}> {todo.text}</span>
      </li>
    );
  }

  render() {
    const toDos = this.getToDos();
    if(!toDos) return null;
    return (
      <ul id="list" className="list">
        {toDos.map((todo, index) =>
          this.renderToDo(todo, index)
        )}
      </ul>
    );
  }
}

export default ToDo;
