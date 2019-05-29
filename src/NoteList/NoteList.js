import React from 'react';
import { withRouter } from 'react-router-dom';
import './NoteList.css';

import STORE from '../dummy-store';

import Note from '../Note/Note';

function NoteList(props) {
  const notes = STORE.notes.map(note => {
    console.log(props.currentFolder);
    if (props.currentFolder && note.folderId === props.currentFolder) {
      return <Note key={note.id} id={note.id} name={note.name} modified={note.modified} folderId={note.folderId} content={note.content}/>
    } else if (props.currentFolder === '') {
      return <Note key={note.id} id={note.id} name={note.name} modified={note.modified} folderId={note.folderId} content={note.content}/>
    }
    return '';
  })

  return (
    <div className="NoteList">
      {notes}
      <button className="add-button">Add note</button>
    </div>
  )
}

export default withRouter(NoteList);