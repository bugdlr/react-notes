import React, { Component } from "react";

import Note from '../../components/Note/Note';

export class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // hard coded notes going to get them from localStorage later
      notes: [
        { id: 1, 
          title: "first note",
          content: "here is the first note",
          time: "10:12am"
        },
        { id: 2, 
          title: "second note",
          content: "here is the second note",
          time: "1:23pm"
        },
        { id: 3, 
          title: "third note",
          content: "here is the third note",
          time: "2:30pm"
        }
      ]
    };
  }
  
  componentDidMount() {
    this.setState({
      notes: JSON.parse(localStorage.getItem("notes"))
    })
  }

  
  render() {
    let notes = this.state.notes.map((note) => {
      return (
        <div key={note.id}>
          <Note id={note.id} title={note.title} content={note.content} time={note.time} />
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