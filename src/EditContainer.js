import React, { Component } from 'react';
import Edit from './Edit';
import uuid from 'uuid/v4';

export class EditContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: ""
            note: "testing testing"
            isEditing: false
        }
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

      create(newNote) {
          localStorage.setItem({id: uuid(), note: newNote});
      }

      delete(id) {
          localStorage.removeItem(id);
      }

      update(id, updatedNote) {
         localStorage.id = updatedNote;
      }
    
    render() {
        return (
            <div>
                <Edit
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
