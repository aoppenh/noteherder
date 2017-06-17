import React from 'react'

import './NoteList.css'

import Note from './Note'

const NoteList = (props) => {
    return (
        <div className="NoteList">
            <h3>Notes {/*<button className="fa fa-trash-o buttons" id="clear" />*/}</h3>
            <ul id="notes">
                {Object.keys(props.notes).map((noteId) => {
                    return (
                        <li key={noteId}>
                            <Note note={props.notes[noteId]} key={noteId} fillForm={props.fillForm} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NoteList