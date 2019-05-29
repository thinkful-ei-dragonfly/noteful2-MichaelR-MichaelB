import React from 'react';
import './Sidebar.css'

import STORE from './dummy-store';

import Folder from './Folder';

function Sidebar(props) {
  const folders = STORE.folders.map(folder => {
    return <Folder key={folder.id} id={folder.id} name={folder.name}/>
  })

  return (
    <div className="Sidebar">
      {folders}
      <button className="add-button">Add folder</button>
    </div>
  )
}

export default Sidebar;