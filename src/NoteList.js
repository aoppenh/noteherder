import React from 'react'

import './NoteList.css'
import './Every.css'

import Data from './NoteForm'

const NoteList = () => {
    return (
        <div className="NoteList">
            <h3>Notes</h3>
            <button className="fa fa-trash-o" id="clear" />
            <ul id="notes">
                <li>
                    <div className="note">
                        <div className="note-title">
                            TEMP
                        </div>
                        <div className="note-body">
                            <p>
                                TEMP
                            </p>
                        </div>
                        <div className="note-buttons">
                            <button className="fa fa-eraser" id="del" />
                            <button className="fa fa-star-o" id="fav" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default NoteList