import React from 'react';
import './Folder.css';

function Folder(props) {
  return (
    <div className="Folder" onClick={() => props.update(props.id)} id={props.id}>{props.name} </div>
  )
}

export default Folder;