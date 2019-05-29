import React from 'react';
import './Folder.css';

function Folder(props) {
  return (
    <div className="Folder" id={props.id}>{props.name}</div>
  )
}

export default Folder;