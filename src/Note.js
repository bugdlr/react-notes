import React, { Component } from 'react'

export class Note extends Component {
    render() {
        return (
            <div>
                <h1>title from props</h1>
                <button>Edit</button>
            </div>
        )
    }
}

export default Note;
