import React, { Component } from 'react';
import uuid from 'uuid/v4';

import Edit from '../../components/Edit/Edit';


export class EditContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            note: {
                id: "",
                title: "",
                content: "",
                time: ""
            },
            isEditing: false
        }
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

      create(notes, newNote) {
        //   send new note to list of notes
          localStorage.setItem(notes, JSON.stringify({...notes, "id": uuid(), "note": newNote}));
            this.setState({
                notes: [...this.state.notes, newNote]
            })  
      }

      delete(id) {
          localStorage.removeItem(id);
      }

      update(updatedNote) {
         this.setState({
             note: updatedNote
         });
         localStorage.setItem("notes", JSON.stringify({
             "id": this.state.id,
             "title": this.state.title,
             "content": (updatedNote),
             "time": new Date()
         }));
      }
    
    render() {
        return (
            <div>
                <Edit
                    id={this.id}
                    title={this.state.title}
                    note={this.state.note}
                    create={this.create} 
                    update={this.update}
                    delete={this.delete}
                />
            </div>
        )
    }
}

export default EditContainer;
