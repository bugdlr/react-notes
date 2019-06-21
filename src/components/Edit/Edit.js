import React, { Component } from "react";
import "./Edit.scss";

export class Edit extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
    this.props.update(evt.target.value);
    console.log(evt.target.value);
  }

  handleDelete(evt) {
    this.props.delete(evt.target.id);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.create(this.props.notes, evt.target.value);
  }

  render() {
    return (
      <div>
        <form className="EditForm">
          <label htmlFor="title"></label>
          <input 
            id="title" 
            type="text" 
            className="EditForm__title"
            name="title" 
            placeholder="title"
            value={this.props.note.title} 
            onChange={this.handleChange} 
          />
          <label htmlFor="note"></label>
          <textarea
            id="note"
            type="text"
            className="EditForm__note"
            placeholder="Your note here..."
            value={this.props.note.content}
            name="note"
            onChange={this.handleChange}
          />
          <div className="btn-container">
            <button onClick={this.handleDelete} className="EditForm__delete btn">Delete</button>
            <button onClick={this.handleSubmit} className="EditForm__save btn">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Edit;
