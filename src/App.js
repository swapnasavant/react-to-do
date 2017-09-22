import React, { Component } from 'react';
import './App.css';
import ToDos from './ToDos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>To Do List</h2>
        </div>
        <div className="App-Content">
            <ToDos />
        </div>
      </div>
    );
  }
}

export default App;
