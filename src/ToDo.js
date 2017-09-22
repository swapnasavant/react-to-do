import React, { Component } from 'react';
import './todo.css';

class ToDo extends Component {
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
      const todo = todos.filter(todo => todo.index === index).complete = true;
      return todos;
    } else {
      return [];
    }
  }

  renderToDo(todo, index) {
    return (
      <li className="todo" key={index}>
        <span className="cross"></span>
        <span className="tick" onClick={this.handleComplete.bind(this, index)}></span>
        <span className="todotext"> {todo.text}</span>
      </li>
    );
  }

  render() {
    const toDos = this.getToDos();
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
