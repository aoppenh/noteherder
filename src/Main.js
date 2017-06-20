import React from 'react'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {
  return (
    <div className="Main">
      <Sidebar {...props} />
      <NoteList notes={props.notes} fillForm={props.fillForm} setCurrentNoteId={props.setCurrentNoteId} />
      <NoteForm {...props} />
    </div>
  )
}

export default Main
