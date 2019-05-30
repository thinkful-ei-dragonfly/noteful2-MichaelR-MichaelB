import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './NoteList.css';

import STORE from '../dummy-store';

import Note from '../Note/Note';
import NoteContent from '../NoteContent/NoteContent';
import AddButton from '../AddButton/AddButton';

import FolderContext from '../FolderContext';

class NoteList extends React.Component {
  // static contextType = FolderContext;

  getNotes = (arr) => {
    // console.log(this.context);
    const notes = arr.map(note => {
      if (this.props.currentFolder && this.props.currentNote && note.id === this.props.currentNote) {
        return <Note key={note.id} id={note.id} name={note.name} modified={note.modified} folderId={note.folderId} content={note.content} updateCurrentNote={this.props.updateCurrentNote} deleteNote={this.props.deleteNote} />
      } else if (this.props.currentFolder && this.props.currentNote && note.id !== this.props.currentNote) {
        return '';
      } else if (this.props.currentFolder && note.folderId === this.props.currentFolder) {
        return <Note key={note.id} id={note.id} name={note.name} modified={note.modified} folderId={note.folderId} content={note.content} updateCurrentNote={this.props.updateCurrentNote} deleteNote={this.props.deleteNote} />
      } else if (this.props.currentNote && note.id === this.props.currentNote) {
        return <Note key={note.id} id={note.id} name={note.name} modified={note.modified} folderId={note.folderId} content={note.content} updateCurrentNote={this.props.updateCurrentNote} deleteNote={this.props.deleteNote} />
      } else if (this.props.currentFolder === '' && this.props.currentNote === '') {
        // console.log('no folder id, no note id');
        return <Note key={note.id} id={note.id} name={note.name} modified={note.modified} folderId={note.folderId} content={note.content} updateCurrentNote={this.props.updateCurrentNote} deleteNote={this.props.deleteNote} />
      }
      return '';
    })
    return  notes
  }

  render() {
    return (
      <FolderContext.Consumer>
        {({notes}) => {
          // console.log(notes);
          return (
          <div className="NoteList">
            {this.getNotes(notes)}
            <Switch>
              <Route
                path="/note"
                render={() => <NoteContent content={this.props.content}/>}
                />
              <Route
                path="/"
                component={AddButton}
                />
            </Switch>
          </div>
        )}}
      </FolderContext.Consumer>
    )
  }
}

export default withRouter(NoteList);