import React from 'react';
import './Note.css';
import { withRouter } from 'react-router-dom';

function Note(props) {
  
  return (
    <div className="Note" id={props.id}>
      <h2 onClick={() => props.updateCurrentNote(props.id, props.content)}>{props.name}</h2>
      <p>{props.modified}</p>
      <button onClick={() => props.deleteNote(props.id)}>Delete Note</button>
    </div>
  )
}

export default withRouter(Note);