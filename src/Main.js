import React from 'react'

import Side from './Sidebar'
import List from './NoteList'
import Form from './NoteForm'

const Main = () => {
    return (
        <div className="Main">
            <Side />
            <List />
            <Form />
        </div>
    )
}

export default Main