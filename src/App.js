import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import base from './base'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: {},
      currentNote: ''
    }
  }

  componentWillMount() {
    base.syncState(
      'notes',
      {
        context: this,
        state: 'notes',
      }
    )
  }

  saveNote = (note) => {
    if (!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notes = { ...this.state.notes }
    notes[note.id] = note
    this.setState({ notes })
  }

  delNote = (note) => {
    const notes = { ...this.state.notes }
    if (!note.id) {
      return
    }
    notes[note.id] = note
    delete notes[note.id]
    this.setState({
      notes,
      currentNote: {
        id: '',
        title: '',
        body: '',
      }
    })
  }

  favNote = (note) => {
    const notes = { ...this.state.notes }
    if (!note.id) {
      return
    }
    notes[note.id] = note
    this.setState({ notes })
  }

  fillForm = (note) => {
    this.setState({
      currentNote: {
        title: '',
        body: '',
      }
    })
    this.setState({ currentNote: note })
  }

  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} saveNote={this.saveNote} delNote={this.delNote} favNote={this.favNote} fillForm={this.fillForm} currentNote={this.state.currentNote} />
      </div>
    );
  }
}

export default App;