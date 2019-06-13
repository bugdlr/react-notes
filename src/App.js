import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NotesList from './containers/NotesList/NotesList';
import EditContainer from './containers/EditContainer/EditContainer';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Route path="/" exact component={NotesList} />
        <Route path="/edit/:id" exact component={EditContainer} />
      </div>
    );
  }
}

export default App;
