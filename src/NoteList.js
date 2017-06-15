import React from 'react'

import './NoteList.css'

import Data from './NoteForm'
import Note from './Note'

const NoteList = () => {
    return (
        <div className="NoteList">
            <h3>Notes <button className="fa fa-trash-o buttons" id="clear" /></h3>
            <ul id="notes">
                <li>
                    <Note />
                </li>
            </ul>
        </div>
    )
}

export default NoteList