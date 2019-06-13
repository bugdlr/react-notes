import React, { Component } from "react";

import Note from '../../components/Note/Note';

export class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // hard coded notes going to get them from localStorage later
      notes: [
        {
          id: "1",
          title: "Note 1",
          time: "5:27PM"
        },
        {
          id: "2",
          title: "Note 2",
          time: "7:00PM"
        },
        {
          id: "3",
          title: "Note 3",
          time: "10:51AM"
        }
      ]
    };
  }
  render() {
    let notes = this.state.notes.map((note) => {
      // each individual note
      return (
        <div key={note.id}>
          <Note id={note.id} title={note.title} time={note.time} />
        </div>
      );
    });

    return (
      <div>
        {notes}
      </div>
    );
  }
}

export default NotesList;