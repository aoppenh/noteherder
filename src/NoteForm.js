import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      note: this.blankNote(),
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.currentNoteId !== this.state.note.id) {
      this.setState({ note: nextProps.notes[nextProps.currentNoteId] })
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  handleChanges = (ev) => {
    const note = { ...this.state.note }
    note[ev.target.name] = ev.target.value
    this.setState(
      { note },
      () => this.props.saveNote(this.state.note)
    )
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({ note: this.blankNote() })

    ev.target.reset()
  }

  // del = (ev) => {
  //   ev.preventDefault()
  //   this.props.delNote(this.props.currentNote)

  //   this.setState({
  //     note: this.blankNote(),
  //   })
  // }

  // fav = (ev) => {
  //   ev.preventDefault()
  //   this.props.favNote(this.props.currentNote)
  // }

  rem = (ev) => {
    ev.preventDefault()

    this.props.removeNote(this.state.note)
    this.setState({ note: this.blankNote() })
  }

  erase = (ev) => {
    ev.preventDefault()

    this.setState({ note: this.blankNote() })
  }

  fev = (ev) => {
    ev.preventDefault()
    
        
  }

  render() {
    return (
      <div className="NoteForm">
        <form onSubmit={this.handleSubmit}>
          <div className="note-buttons">
            <button type="submit" className="fa fa-floppy-o buttons" id="test" />
            <button type="button" className="fa fa-trash-o buttons" id="trash" onClick={this.rem} />
            <button type="button" className="fa fa-eraser buttons" id="erase" onClick={this.erase} />
            <button type="button" className="fa fa-star-o buttons" id="fav" onClick={this.fev} />
          </div>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              onChange={this.handleChanges}
              value={this.state.note.title}
            />
          </p>
          <p>
            <textarea
              name="body"
              placeholder="Just start typing..."
              onChange={this.handleChanges}
              value={this.state.note.body}
            ></textarea>
          </p>
        </form>
      </div>
    )
  }
}

export default NoteForm