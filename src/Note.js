import React, { Component } from 'react'

import './NoteList.css'
import './Every.css'

class Note extends Component {
    render() {
        return (
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
                    <button className="fa fa-eraser buttons" id="del" />
                    <button className="fa fa-star-o buttons" id="fav" />
                </div>
            </div>
        )
    }
}

export default Note