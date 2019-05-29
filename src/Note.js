import React from 'react';
import './Note.css';
import { withRouter } from 'react-router-dom';

function Note(props) {
  console.log(props.history);
  return (
    <div className="Note" id={props.id}>
      <h2>{props.name}</h2>
      <p>{props.modified}</p>
      <button>Delete Note</button>
    </div>
  )
}

export default withRouter(Note);