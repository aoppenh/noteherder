import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {
  return (
    <div className="Main">
      <Sidebar {...props} />
      <NoteList notes={props.notes} fillForm={props.fillForm} setCurrentNoteId={props.setCurrentNoteId} />
      <Switch>
        <Route path="/notes/:id" render={(navProps) => (
          <NoteForm {...props} {...navProps} />
        )} />
        <Route render={(navProps) => (
          <NoteForm {...props} {...navProps} />
        )} />
      </Switch>
    </div>
  )
}

export default Main
