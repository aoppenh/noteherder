import React from 'react'

const Note = (props) => {
    const del = (ev) => {
        ev.preventDefault()
        props.delNote(props.note)
    }

    const fav = (ev) => {
        ev.preventDefault()
        props.favNote(props.note)
    }

    const fill = (ev) => {
        ev.preventDefault()
        props.fillForm(props.note)
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
                <div className="note-buttons">
                    <button className="fa fa-eraser buttons" id="del" onClick={del} />
                    <button className="fa fa-star-o buttons" id="fav" onClick={fav} />
                </div>
            </div>
        </li>
    )
}

export default Note