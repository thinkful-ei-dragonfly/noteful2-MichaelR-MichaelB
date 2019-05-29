import React from 'react';
import './NoteContent.css';

function NoteContent(props) {
  return <p className="NoteContent">{props.content}</p>
}

export default NoteContent;