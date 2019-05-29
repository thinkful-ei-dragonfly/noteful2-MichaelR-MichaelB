import React from 'react';

import STORE from '../dummy-store';

import Folder from '../Folder/Folder';

function Sidebar(props) {
  const folders = STORE.folders.map(folder => {
    return <Folder key={folder.id} id={folder.id} name={folder.name} update={props.updateCurrentFolder} currentFolder={props.currentFolder}/>
  })

  return (
    <div className="FolderList">
      {folders}
      <button className="add-button">Add folder</button>
    </div>
  )
}

export default Sidebar;