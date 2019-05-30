import React from 'react';
import './Folder.css';

function Folder(props) {
  let fileClass='Folder'
  if (props.id === props.currentFolder) {
    fileClass += ' selected'
  }
  return (
    <div
      className={fileClass}
      onClick={() => props.update(props.id)}
      id={props.id}
    >
      {props.name}
    </div>
  )
}

export default Folder;