import React, { Component } from 'react';
import './App.css';

import Form from './NoteForm'
import Side from './Sidebar'
import List from './NoteList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Side />
        <List />
        <Form />
      </div>
    );
  }
}

export default App;
