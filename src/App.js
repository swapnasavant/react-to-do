import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import ToDo from './ToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>To Do List</h2>
        </div>
        <div className="App-Content">
            <Search />
            <ToDo />
        </div>
      </div>
    );
  }
}

export default App;
