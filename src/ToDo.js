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

  renderToDo(todo) {
    return (
      <li className="todo">
        <span className="cross"></span>
        <span className="tick"></span>
        <span className="todotext"> {todo.text}</span>
      </li>
    );
  }

  render() {
    const toDos = this.getToDos();
    return (
      <ul id="list" className="list">
        {toDos.map((todo) =>
          this.renderToDo(todo)
        )}
      </ul>
    );
  }
}

export default ToDo;
