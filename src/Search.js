import React, { Component } from 'react';
import './App.css';
let todos = [];

class Search extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if(e.key === "Enter") {
      console.log(e.target.value);
      todos.push({
        text: e.target.value,
        complete: false
      });
      if ((typeof(Storage) !== "undefined")) {
        sessionStorage.setItem("todos", JSON.stringify(todos));
      }
    }
  }

  render() {
    return (
      <input
         maxLength="60"
         id="addtodo"
         className="addtodo"
         placeholder="Add a to-do"
         type="text"
         onKeyPress={this.handleClick}
      />
    );
  }
}

export default Search;
