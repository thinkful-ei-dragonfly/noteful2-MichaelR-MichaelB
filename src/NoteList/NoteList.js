import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './NoteList.css';

import STORE from '../dummy-store';

import Note from '../Note/Note';
import NoteContent from '../NoteContent/NoteContent';
import AddButton from '../AddButton/AddButton';

function NoteList(props) {
  const notes = STORE.notes.map(note => {
    if (props.currentFolder && props.currentNote && note.id === props.currentNote) {
      return <Note key={note.id} id={note.id} name={note.name} modified={note.modified} folderId={note.folderId} content={note.content} updateCurrentNote={props.updateCurrentNote}/>
    } else if (props.currentFolder && props.currentNote && note.id !== props.currentNote) {
      return '';
    } else if (props.currentFolder && note.folderId === props.currentFolder) {
      return <Note key={note.id} id={note.id} name={note.name} modified={note.modified} folderId={note.folderId} content={note.content} updateCurrentNote={props.updateCurrentNote}/>
    } else if (props.currentNote && note.id === props.currentNote) {
      return <Note key={note.id} id={note.id} name={note.name} modified={note.modified} folderId={note.folderId} content={note.content} updateCurrentNote={props.updateCurrentNote}/>
    } else if (props.currentFolder === '' && props.currentNote === '') {
      return <Note key={note.id} id={note.id} name={note.name} modified={note.modified} folderId={note.folderId} content={note.content} updateCurrentNote={props.updateCurrentNote}/>
    }
    return '';
  })

  return (
    <div className="NoteList">
      {notes}
      <Switch>
        <Route
          path="/note"
          render={() => <NoteContent content={props.content}/>}
          />
        <Route
          path="/"
          component={AddButton}
        />
      </Switch>
    </div>
  )
}

export default withRouter(NoteList);