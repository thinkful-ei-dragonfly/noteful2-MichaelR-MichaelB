import React from 'react';

import STORE from '../dummy-store';

import Folder from '../Folder/Folder';
import FolderContext from '../FolderContext';

class Sidebar extends React.Component {

  getFolders = (arr) => {
  const folders = arr.map(folder => {
    return (
      <Folder
        key={folder.id}
        id={folder.id}
        name={folder.name}
        update={this.props.updateCurrentFolder}
        currentFolder={this.props.currentFolder}
      />
    )
  })
  return folders
}

  render() {
    return (
      <FolderContext.Consumer>
        {({folders}) => {
          return (
            <div className="FolderList">
            {this.getFolders(folders)}
            <button className="add-button">Add folder</button>
          </div>
          )}
      }
      </FolderContext.Consumer>
    )
  }
}

export default Sidebar;