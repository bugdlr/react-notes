import React, { Component } from 'react';
import Edit from './Edit';
import uuid from 'uuid/v4';

export class EditContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: "",
            note: "testing testing",
            isEditing: false
        }
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

      create(notes, newNote) {
          this.setState({ note: newNote, id: uuid() });
          localStorage.setItem(notes, {...notes, "id": this.state.id, "content": newNote});
      }

      delete(id) {
          localStorage.removeItem(id);
      }

      update(updatedNote) {
         this.setState({note: updatedNote});
         localStorage.setItem("notes", {
             "id": this.state.id,
             "content": updatedNote
         });
      }
    
    render() {
        return (
            <div>
                <Edit
                    id={this.id}
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
