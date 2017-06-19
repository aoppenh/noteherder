import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import base, { auth } from './base'
import SignIn from './SignIn'
import SignOut from './SignOut'

class App extends Component {
  constructor() {
    super()
    this.state = {
      uid: null,
      notes: {},
      currentNote: ''
    }
  }

  componentWillMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.authHandler(user)
      }
    })
  }

  syncNotes = () => {
    base.syncState(
      `${this.state.uid}/notes`,
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

  signedIn = () => {
    return this.state.uid
  }

  authHandler = (userData) => {
    this.setState(
      { uid: userData.uid },
      this.syncNotes
    )
  }

  signOut = () => {
    auth
      .signOut()
      .then(() => this.setState({ uid: null }))

  }

  renderMain = () => {
    return (
      <div>
        <SignOut signOut={this.signOut} />
        <Main notes={this.state.notes} saveNote={this.saveNote} delNote={this.delNote} favNote={this.favNote} fillForm={this.fillForm} currentNote={this.state.currentNote} />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.signedIn() ? this.renderMain() : <SignIn authHandler={this.authHandler} />}
      </div>
    );
  }
}

export default App;