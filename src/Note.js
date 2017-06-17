import React from 'react'

const Note = (props) => {
    const fill = (ev) => {
        ev.preventDefault()
        props.fillForm(props.note)
        console.log(props.note)
    }

    return (
        <li onClick={fill}>
            <div className="note">
                <div className="note-title">
                    {props.note.title}
                </div>
                <div className="note-body">
                    <p>
                        {props.note.body}
                    </p>
                </div>
            </div>
        </li>
    )
}

export default Note