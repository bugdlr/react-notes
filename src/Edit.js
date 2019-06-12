import React, { Component } from 'react';


export class Edit extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);   
        this.handleDelete = this.handleDelete.bind(this);   
        this.handleSubmit = this.handleSubmit.bind(this);   
    }

    handleChange(evt){
        this.props.update([evt.target.name], evt.target.value);
        console.log(evt.target.value);
    }

    handleDelete(evt){
        this.props.delete(evt.target.id);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.create(evt.target.value);
    }
    
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="note"></label>
                        <textarea 
                            id= 'note'
                            type = 'text'
                            placeholder = 'Your note here...'
                            name = 'note'
                            onChange = {
                                this.handleChange
                            } />
                    <button onClick={this.handleSubmit}>Save</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </form>
            </div>
        )
    }
}

export default Edit;
